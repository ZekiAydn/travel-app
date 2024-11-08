"use client";

import { Dropdown, Menu } from 'antd';
import Image from 'next/image';
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { useLanguageStore } from '@/stores/useLanguageStore';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguageStore(); // Access Zustand store

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        setLanguage(key); // Update locale in Zustand store
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            {[
                { key: "en", src: "/gb.png", alt: "English", label: "EN" },
                { key: "tr", src: "/trflag.png", alt: "Türkçe", label: "TR" },
            ].map(({ key, src, alt, label }) => (
                <Menu.Item key={key}>
                    <div className="flex items-center space-x-2">
                        <Image src={src} alt={alt} width={20} height={12} />
                        <span>{label}</span>
                    </div>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="top-4 right-4 z-50">
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="flex items-center cursor-pointer">
                    <Image
                        src={language === "en" ? "/gb.png" : "/trflag.png"}
                        alt={language?.toUpperCase()}
                        width={20}
                        height={12}
                    />
                    <span className="ml-2">{language?.toUpperCase()}</span>
                    <DownOutlined className="w-3 h-2 ml-0.5" />
                </div>
            </Dropdown>
        </div>
    );
};

export default LanguageSelector;
