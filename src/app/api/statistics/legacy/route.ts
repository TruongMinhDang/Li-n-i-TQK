import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// This route fetches the OLD data from the original 'statistics' collection.

export async function GET() {
  try {
    // Reference to the OLD collection
    const chiDoiRef = collection(db, 'statistics');
    const snapshot = await getDocs(chiDoiRef);

    if (snapshot.empty) {
      return NextResponse.json([]);
    }

    // Map the documents to the old data structure
    const legacyData = snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name,
      tietTot: doc.data().tietTot || 0,
      hoaDiemMuoi: doc.data().hoaDiemMuoi || 0,
    }));

    return NextResponse.json(legacyData);
    
  } catch (error) {
    console.error("Error fetching legacy statistics: ", error);
    // Return a 500 Internal Server Error response
    return new NextResponse('Internal Server Error while fetching legacy data', { status: 500 });
  }
}
