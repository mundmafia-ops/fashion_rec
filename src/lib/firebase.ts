// ─── Firebase: Google sign-in ──────────────────────────────────────────────
// A thin client-side wrapper around Firebase Auth. We only use it to gate the
// wishlist behind a Google login — there's no server, so the config values are
// the public web-app keys (safe to ship to the browser). Fill them via env vars
// (PUBLIC_FIREBASE_*) in `.env` locally and in the Vercel dashboard for prod.
import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type Auth,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
};

// Whether the project has been wired up — if the keys are missing we skip the
// gate entirely so the wishlist keeps working in a fresh checkout.
export const firebaseReady = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId,
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;

function getAuthInstance(): Auth {
  if (!auth) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  return auth;
}

const provider = new GoogleAuthProvider();

export type { User };

/** Pop the Google sign-in dialog; resolves with the signed-in user. */
export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(getAuthInstance(), provider);
  return result.user;
}

export function signOut(): Promise<void> {
  return fbSignOut(getAuthInstance());
}

/** Subscribe to auth changes; fires immediately with the current user (or null). */
export function watchAuth(cb: (user: User | null) => void): () => void {
  return onAuthStateChanged(getAuthInstance(), cb);
}
