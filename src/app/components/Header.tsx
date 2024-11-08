"use client";
import React from "react";
import Image from "next/image";
import MobileDrawer from "@/app/components/Drawer";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Header: React.FC = () => {
    const { t } = useLanguageStore();

    const menuItems = [
        { label: t("popularDestinations"), href: '/popularDestinations' },
        { label: t("topHotels"), href: '/topHotels' },
        { label: t("lastMinute"), href: '/lastMinute' },
        { label: t("recommended"), href: '/recommended' },
        { label: t("charterAntalya"), href: '/charterAntalya' },
        { label: t("cityBreakIstanbul"), href: '/cityBreakIstanbul' },
    ];

    return (
        <div className="bg-white">
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <a href="/" className="flex items-center space-x-3">
                    <Image src="/logo.png" alt="TravelGo Logo" width={200} height={100} priority />
                </a>

                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    {menuItems.map(({ label, href }) => (
                        <a key={label} href={href} className="hover:text-gray-900">
                            {label}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <MobileDrawer />
                </div>
            </div>
        </div>
    );
};

export default Header;
