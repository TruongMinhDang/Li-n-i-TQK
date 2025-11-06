
import * as admin from 'firebase-admin';

// IMPORTANT: Hide this configuration from the client-side.
// We are using a server-side environment variable to store the private key.
// This is a more secure way to handle credentials than committing a JSON file.
const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const firestore = admin.firestore();
export { firestore, admin };
