"use client";
import React from "react";
import { HeartOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import LanguageSelector from "@/app/components/LanguageSelector";
import {useLanguageStore} from "@/stores/useLanguageStore";


const TopHeader: React.FC = () => {
    const { t } = useLanguageStore(); // t fonksiyonunu kullanarak çevirileri alıyoruz

    return (
        <div className="flex flex-col space-y-2 bg-gray-100 py-2 border-b border-gray-200">
            <div className="container mx-auto flex justify-end items-center px-4 text-gray-600 text-sm">

                <div className="hidden md:flex items-center space-x-8">
                    <span className="hover:text-gray-800 cursor-pointer">{t("b2bPlatform")}</span>
                    <span className="hover:text-gray-800 cursor-pointer">{t("clientCare")}</span>
                    <span className="hover:text-gray-800 cursor-pointer">{t("contact")}</span>

                    <div className="flex items-center space-x-1">
                        <PhoneOutlined className="text-base text-orange-300" />
                        <span className="hover:text-gray-800 cursor-pointer">{t("phoneNumber")}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                        <HeartOutlined className="text-base text-orange-300" />
                        <span className="hover:text-gray-800 cursor-pointer">{t("favorite")}</span>
                    </div>

                    <Input
                        placeholder={t("searchPlaceholder")}
                        prefix={<SearchOutlined className="text-orange-400" />}
                        className="w-48 text-sm ml-6"
                    />

                    <LanguageSelector />
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
