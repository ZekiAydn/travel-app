import { create } from 'zustand';
import translations from '@/translations/translations.json';

interface Translation {
    [key: string]: string | Translation;
}

interface LanguageStore {
    language: string;
    translations: Record<string, Translation>;
    setLanguage: (language: string) => void;
    t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    language: 'en',
    translations: translations as Record<string, Translation>,

    setLanguage: (language: string) => set({ language }),

    t: (key: string): string => {
        const { language, translations } = useLanguageStore.getState();
        const keys = key.split('.');
        let result: string | Translation | undefined = translations[language];

        for (const k of keys) {
            if (typeof result === 'object' && result !== null && k in result) {
                result = result[k] as string | Translation;
            } else {
                return key;
            }
        }

        return typeof result === 'string' ? result : key;
    },
}));
