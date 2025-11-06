
// scripts/seed-admins.ts
import { firestore } from '../src/lib/firebase-admin';

// --- CONFIGURATION ---
// Add the email addresses of all administrators here
const ADMIN_EMAILS = [
    'truongminhdang1@gmail.com',
    // You can add more admin emails here in the future
];
// ---------------------

async function seedAdmins() {
    try {
        console.log('Starting to seed admin list...');

        const adminListRef = firestore.collection('admins').doc('admin_list');

        await adminListRef.set({
            emails: ADMIN_EMAILS
        });

        console.log('Successfully seeded admin list!');
        console.log('Admins:', ADMIN_EMAILS);

    } catch (error) {
        console.error('Error seeding admin list:', error);
        process.exit(1); // Exit with an error code
    }
}

// Run the seeder
seedAdmins();
