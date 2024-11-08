"use client";
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import FilterSidebar from "@/app/components/FilterSidebar";
import Layout from '../layout';
import HotelList from "@/app/components/HotelList";
import fetchData from "@/app/utils/fetchData";
import { useFilterStore } from '@/stores/useFilterStore';
import { useLanguageStore } from '@/stores/useLanguageStore';

export default function ResultPage() {
    const { filters } = useFilterStore();
    const { t } = useLanguageStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { data: filteredData, isLoading, error } = useQuery({
        queryKey: ['filteredResults', filters],
        queryFn: fetchData,
    });

    if (!isMounted) return null;

    if (isLoading) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <Spin size="large" />
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen text-red-500">
                    {t('loadingError')}
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container mx-auto my-10 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 mb-20">

                <div className="w-full lg:w-1/4 lg:p-0 p-6">
                    <FilterSidebar />
                </div>


                <div className="w-full lg:w-3/4 lg:p-0 p-6 ">
                    <HotelList hotels={filteredData || []} />
                </div>
            </div>
        </Layout>
    );
}
