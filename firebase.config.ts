import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import type { FirebaseApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: 'AIzaSyDuQjLynFd-qC4idt-PmXfzVqTCQwMjdw0',
  authDomain: 'agently-501d9.firebaseapp.com',
  projectId: 'agently-501d9',
  storageBucket: 'agently-501d9.firebasestorage.app',
  messagingSenderId: '748145021599',
  appId: '1:748145021599:web:a9812504231213303808aa',
  measurementId: 'G-9EFLQDZ58T',
};

export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics | null> | null = null;

export function initializeFirebaseAnalytics() {
  if (analyticsPromise) {
    return analyticsPromise;
  }

  analyticsPromise = isSupported()
    .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
    .catch(() => null);

  return analyticsPromise;
}
