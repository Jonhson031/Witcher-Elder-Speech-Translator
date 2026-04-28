import { useEffect } from 'react';

export function useLocalStorageData(key, saveTo) {
  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          saveTo(parsed);
        }
      } catch (err) {
        console.error('Failed to parse recentTranslations from localStorage', err);
      }
    }
  }, []);
}

export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
