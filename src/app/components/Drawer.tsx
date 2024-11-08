"use client";
import { useState } from "react";
import { Drawer, Button } from "antd";
import {HeartOutlined, MenuOutlined, PhoneOutlined} from "@ant-design/icons";
import { useLanguageStore } from "@/stores/useLanguageStore";
import LanguageSelector from "@/app/components/LanguageSelector";

export default function MobileDrawer() {
    const { t } = useLanguageStore();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => setDrawerVisible(prev => !prev);

    const menuItems = [
        { label: t("b2bPlatform"), href: "/popular-destinations" },
        { label: t("clientCare"), href: "/top-hotels" },
        { label: t("contact"), href: "/last-minute" },

        { label: t("popularDestinations"), href: "/popular-destinations" },
        { label: t("topHotels"), href: "/top-hotels" },
        { label: t("lastMinute"), href: "/last-minute" },
        { label: t("recommended"), href: "/recommended" },
        { label: t("charterAntalya"), href: "/charter-antalya" },
        { label: t("cityBreakIstanbul"), href: "/city-break-istanbul" },
    ];

    return (
        <>
            <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer} />
            <Drawer
                title={t("menu")}
                placement="right"
                onClose={toggleDrawer}
                open={drawerVisible}
                className="text-gray-700"
            >
                <nav className="flex flex-col space-y-4 text-sm font-medium">
                    {menuItems.map(({label, href}) => (
                        <a key={label} href={href} className="hover:text-gray-900"
                           onClick={() => setDrawerVisible(false)}>
                            {label}
                        </a>
                    ))}
                    <div className="flex items-center space-x-1">
                        <PhoneOutlined className="text-base text-orange-300"/>
                        <span className="hover:text-gray-800 cursor-pointer">{t("phoneNumber")}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <HeartOutlined className="text-base text-orange-300"/>
                        <span className="hover:text-gray-800 cursor-pointer">{t("favorite")}</span>
                    </div>

                    <LanguageSelector/>
                </nav>
            </Drawer>
        </>
    )
        ;
}
