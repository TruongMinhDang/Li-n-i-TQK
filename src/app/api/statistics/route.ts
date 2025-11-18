import { NextResponse } from "next/server";
// SỬA LỖI: Import 'auth' thay vì 'admin'
import { firestore, auth } from "@/lib/firebase-admin";
import { cookies } from "next/headers";

export interface WeeklyClassScore {
  id: string;
  name: string;
  tietTot_week1?: number;
  tietTot_week2?: number;
  tietTot_week3?: number;
  hoaDiemMuoi_week1?: number;
  hoaDiemMuoi_week2?: number;
  hoaDiemMuoi_week3?: number;
}

async function verifyAdmin(): Promise<boolean> {
  const sessionCookie = cookies().get("session")?.value;

  if (!sessionCookie) return false;

  try {
    // SỬA LỖI: Dùng 'auth' trực tiếp
    const decoded = await auth.verifySessionCookie(sessionCookie, true);

    const adminEmails = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || "")
      .split(",")
      .map((e) => e.trim());

    return decoded.email ? adminEmails.includes(decoded.email) : false;
  } catch (error) {
    console.error("verifyAdmin error:", error);
    return false;
  }
}

// --- GET: lấy dữ liệu
export async function GET() {
  try {
    const snapshot = await firestore.collection("statistics_weekly").get();

    if (snapshot.empty) {
      return NextResponse.json([]);
    }

    const chiDois: WeeklyClassScore[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        name: data.name || "",
        tietTot_week1: data.tietTot_week1 ?? 0,
        tietTot_week2: data.tietTot_week2 ?? 0,
        tietTot_week3: data.tietTot_week3 ?? 0,
        hoaDiemMuoi_week1: data.hoaDiemMuoi_week1 ?? 0,
        hoaDiemMuoi_week2: data.hoaDiemMuoi_week2 ?? 0,
        hoaDiemMuoi_week3: data.hoaDiemMuoi_week3 ?? 0,
      };
    });

    return NextResponse.json(chiDois);
  } catch (error) {
    console.error("GET statistics error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// --- POST: ghi dữ liệu
export async function POST(request: Request) {
  const isAdmin = await verifyAdmin();
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }

  try {
    const chiDois: WeeklyClassScore[] = await request.json();

    if (!Array.isArray(chiDois)) {
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 }
      );
    }

    const batch = firestore.batch();
    const statsRef = firestore.collection("statistics_weekly");

    chiDois.forEach((chiDoi) => {
      if (!chiDoi.id || !chiDoi.name) {
        throw new Error("Invalid class data");
      }

      const docRef = statsRef.doc(chiDoi.id);

      batch.set(docRef, {
        name: chiDoi.name,
        tietTot_week1: chiDoi.tietTot_week1 ?? 0,
        tietTot_week2: chiDoi.tietTot_week2 ?? 0,
        tietTot_week3: chiDoi.tietTot_week3 ?? 0,
        hoaDiemMuoi_week1: chiDoi.hoaDiemMuoi_week1 ?? 0,
        hoaDiemMuoi_week2: chiDoi.hoaDiemMuoi_week2 ?? 0,
        hoaDiemMuoi_week3: chiDoi.hoaDiemMuoi_week3 ?? 0,
      });
    });

    await batch.commit();

    return NextResponse.json(
      { message: "Weekly statistics updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST statistics error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
