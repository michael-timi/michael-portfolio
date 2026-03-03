import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  getFirestore,
  type Firestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

function getFirebaseConfig() {
  // These should be provided via environment variables in `.env.local`
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (Object.values(config).some((value) => !value)) {
    console.warn(
      "[firebase] Missing Firebase config. Contact form submissions will be disabled until env vars are set.",
    );
  }

  return config;
}

export function isFirebaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  );
}

export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;

  if (!app) {
    const apps = getApps();
    app = apps.length ? apps[0] : initializeApp(getFirebaseConfig());
  }

  return app;
}

export function getFirebaseDb(): Firestore | null {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    if (!firebaseApp) return null;
    db = getFirestore(firebaseApp);
  }

  return db;
}

export async function submitContactMessage(input: {
  name: string;
  email: string;
  message: string;
}) {
  const database = getFirebaseDb();
  if (!database) {
    throw new Error(
      "Firebase is not configured. Please set NEXT_PUBLIC_FIREBASE_* env vars.",
    );
  }

  const messagesRef = collection(database, "portfolio_contact_messages");

  await addDoc(messagesRef, {
    ...input,
    createdAt: serverTimestamp(),
  });
}

