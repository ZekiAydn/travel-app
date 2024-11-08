"use client";
import { Radio } from "antd";
import { CalendarOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import { useLanguageStore } from "@/stores/useLanguageStore";

const CustomRadio = () => {
    const { t } = useLanguageStore();

    const options = [
        { value: "Package", icon: <GlobalOutlined />, label: t("package") },
        { value: "Hotel", icon: <CalendarOutlined />, label: t("hotel") },
        { value: "Flight", icon: <EnvironmentOutlined />, label: t("flight") },
    ];

    return (
        <div className="relative z-10 flex justify-center pt-60">
            <Radio.Group
                defaultValue="Package"
                className="bg-gray-200 inline-flex rounded-md shadow-lg border-0"
            >
                {options.map(({ value, icon, label }) => (
                    <Radio.Button
                        key={value}
                        value={value}
                        className="p-4 sm:p-6 font-medium flex items-center bg-transparent border-0"
                    >
                        {icon}
                        <span className="pl-2">{label}</span>
                    </Radio.Button>
                ))}
            </Radio.Group>
        </div>
    );
};

export default CustomRadio;
