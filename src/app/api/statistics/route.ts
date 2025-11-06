
import { NextResponse } from "next/server";
import { firestore, admin } from "@/lib/firebase-admin";
import { cookies } from 'next/headers';

// The new data structure that includes weekly data
export interface WeeklyClassScore {
    id: string; // e.g., "6-1"
    name: string; // e.g., "6/1"
    tietTot_week1?: number;
    tietTot_week2?: number;
    tietTot_week3?: number;
    hoaDiemMuoi_week1?: number;
    hoaDiemMuoi_week2?: number;
    hoaDiemMuoi_week3?: number;
}

// Helper to verify the user's ID token and check for admin privileges
async function verifyAdmin(): Promise<boolean> {
    const sessionCookie = cookies().get('session')?.value || '';
    if (!sessionCookie) {
        return false;
    }

    try {
        const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true /** checkRevoked */);
        const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '').split(',');
        return !!(decodedClaims.email && adminEmails.includes(decodedClaims.email));
    } catch (error) {
        console.error("Admin verification failed:", error);
        return false;
    }
}

export async function GET(request: Request) {
    try {
        const statsCollection = firestore.collection('statistics_weekly'); // Use a new collection for the new structure
        const snapshot = await statsCollection.get();

        if (snapshot.empty) {
            return NextResponse.json([]); 
        }

        const chiDois: WeeklyClassScore[] = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            // Ensure the data conforms to the new interface, providing defaults
            const chiDoi: WeeklyClassScore = {
                id: doc.id,
                name: data.name || '',
                tietTot_week1: data.tietTot_week1 || 0,
                tietTot_week2: data.tietTot_week2 || 0,
                tietTot_week3: data.tietTot_week3 || 0,
                hoaDiemMuoi_week1: data.hoaDiemMuoi_week1 || 0,
                hoaDiemMuoi_week2: data.hoaDiemMuoi_week2 || 0,
                hoaDiemMuoi_week3: data.hoaDiemMuoi_week3 || 0,
            };
            chiDois.push(chiDoi);
        });

        return NextResponse.json(chiDois);
    } catch (error) {
        console.error("Error fetching weekly statistics:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    try {
        const chiDois: WeeklyClassScore[] = await request.json();

        if (!Array.isArray(chiDois)) {
             return NextResponse.json({ message: "Invalid data format" }, { status: 400 });
        }

        const batch = firestore.batch();
        const statsCollectionRef = firestore.collection('statistics_weekly');

        chiDois.forEach(chiDoi => {
            if (!chiDoi.id || !chiDoi.name) {
                throw new Error("Invalid ChiDoi object received.");
            }
            const docRef = statsCollectionRef.doc(chiDoi.id);
            // Set the entire object, which includes all weekly data
            batch.set(docRef, {
                name: chiDoi.name,
                tietTot_week1: chiDoi.tietTot_week1 || 0,
                tietTot_week2: chiDoi.tietTot_week2 || 0,
                tietTot_week3: chiDoi.tietTot_week3 || 0,
                hoaDiemMuoi_week1: chiDoi.hoaDiemMuoi_week1 || 0,
                hoaDiemMuoi_week2: chiDoi.hoaDiemMuoi_week2 || 0,
                hoaDiemMuoi_week3: chiDoi.hoaDiemMuoi_week3 || 0,
            });
        });

        await batch.commit();

        return NextResponse.json({ message: "Weekly statistics updated successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error updating weekly statistics:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
