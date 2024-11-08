import { mockData } from "@/app/data/data";

interface FilterParams {
    from?: string;
    destination?: string;
    date?: string;
    nights?: string;
    people?: string;
}

interface Hotel {
    title: string;
    location: string;
    price: string;
    originalPrice: string;
    rating: number;
    adults: number;
    children: number;
    date: string;
    nights: number;
    amenities: string;
    imageUrl: string;
}

const fetchData = async ({ queryKey }: { queryKey: [string, FilterParams] }): Promise<Hotel[]> => {
    const [, filters] = queryKey;

    return mockData.filter((hotel) => {
        const hotelNights = `${hotel.nights} Night`;
        const totalPeople = parseInt(filters.people?.split(" ")[0] || "1", 10);

        // Filtreleme işlemleri
        //const matchesLocation = !filters.from || hotel.location.toLowerCase().includes(filters.from.toLowerCase());
        //const matchesDestination = !filters.destination || hotel.location.toLowerCase().includes(filters.destination.toLowerCase());
        //const matchesDate = !filters.date || hotel.date === filters.date;
        const matchesNights = !filters.nights || hotelNights === filters.nights;
        const matchesPeople = !filters.people || hotel.adults + hotel.children === totalPeople;

        return matchesNights && matchesPeople;
    });
};

export default fetchData;
