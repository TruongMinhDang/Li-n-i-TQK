
import { NextResponse } from 'next/server';
import { collection, getDocs, writeBatch, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';

// This is a one-time script to migrate data from the old `statistics` collection
// to the new `statistics_weekly` collection.
// It copies the total `tietTot` and `hoaDiemMuoi` into the `_week1` fields.

export async function POST() {
  try {
    const legacyCollectionRef = collection(db, 'statistics');
    const newCollectionRef = collection(db, 'statistics_weekly');
    
    // 1. Fetch all legacy data
    const legacySnapshot = await getDocs(legacyCollectionRef);

    if (legacySnapshot.empty) {
      return new NextResponse('No legacy data to migrate.', { status: 404 });
    }

    // 2. Prepare a batch write for the new collection
    const batch = writeBatch(db);

    legacySnapshot.forEach(legacyDoc => {
      const legacyData = legacyDoc.data();
      const newDocRef = doc(newCollectionRef, legacyDoc.id); // Use the same ID

      // 3. Create the new data structure
      const newData = {
        id: legacyDoc.id,
        name: legacyData.name,
        tietTot_week1: legacyData.tietTot || 0,
        hoaDiemMuoi_week1: legacyData.hoaDiemMuoi || 0,
        // Initialize other weeks to 0 to ensure the fields exist
        tietTot_week2: 0,
        tietTot_week3: 0,
        hoaDiemMuoi_week2: 0,
        hoaDiemMuoi_week3: 0,
      };

      // 4. Add the operation to the batch.
      // `set` with { merge: true } will create or update.
      batch.set(newDocRef, newData, { merge: true });
    });

    // 5. Commit the batch
    await batch.commit();

    return NextResponse.json({ 
        message: 'Migration successful!', 
        migratedCount: legacySnapshot.size 
    });

  } catch (error) {
    console.error("Error during data migration: ", error);
    if (error instanceof Error) {
        return new NextResponse(error.message, { status: 500 });
    }
    return new NextResponse('An unknown error occurred during migration.', { status: 500 });
  }
}
