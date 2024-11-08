import { create } from 'zustand';

interface FilterParams {
    from: string;
    destination: string;
    date: string;
    nights: string;
    people: string;
    rating: string;
}

interface FilterStore {
    filters: FilterParams;
    setFilter: (key: keyof FilterParams, value: string | null) => void;
    clearFilters: () => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    filters: {
        from: '',
        destination: '',
        date: '',
        nights: '1 Night',
        people: '2 People',
        rating: '',
    },
    setFilter: (key, value) => set((state) => ({
        filters: { ...state.filters, [key]: value },
    })),
    clearFilters: () =>
        set({
            filters: {
                from: '',
                destination: '',
                date: '',
                nights: '1 Night',
                people: '2 People',
                rating: '',
            },
        }),
}));
