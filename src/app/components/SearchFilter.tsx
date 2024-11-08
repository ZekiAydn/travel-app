"use client";

import { CalendarOutlined, EnvironmentOutlined, MoonOutlined, SearchOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, DatePicker, Divider, Input, Select } from "antd";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useFilterStore } from "@/stores/useFilterStore";

const { Option } = Select;

export default function SearchFilter() {
    const router = useRouter();
    const { t } = useLanguageStore();
    const { filters, setFilter } = useFilterStore();

    const handleInputChange = (key: keyof typeof filters, value: string | null) => {
        setFilter(key, value);
    };

    const handleSearchClick = () => {
        router.push('/result');
    };

    const nightOptions = Array.from({ length: 30 }, (_, i) => `${i + 1} ${t("night")}`);
    const peopleOptions = Array.from({ length: 30 }, (_, i) => `${i + 1} ${t("person")}`);

    return (
        <div className="p-2 bg-opacity-40 max-w-7xl bg-white justify-self-center justify-between relative z-10 mt-10 flex flex-col lg:flex-row items-center sm:px-4">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-6xl m-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mx-auto">
                <div className="flex items-center w-full sm:w-1/4">
                    <EnvironmentOutlined className="text-gray-700 text-xl" />
                    <Input
                        size="small"
                        variant="borderless"
                        placeholder={t("from")}
                        className="text-gray-700 w-full"
                        value={filters.from}
                        onChange={(e) => handleInputChange("from", e.target.value)}
                    />
                </div>

                <Divider type="vertical" className="hidden sm:block h-10 bg-gray-300" />

                <div className="flex items-center w-full sm:w-1/4">
                    <SearchOutlined className="text-gray-700 text-xl" />
                    <Input
                        variant="borderless"
                        size="small"
                        placeholder={t("destination")}
                        className="text-gray-700 w-full"
                        value={filters.destination}
                        onChange={(e) => handleInputChange("destination", e.target.value)}
                    />
                </div>

                <Divider type="vertical" className="hidden sm:block h-10 bg-gray-300" />

                <div className="flex items-center w-full sm:w-1/6">
                    <CalendarOutlined className="text-gray-700 text-xl" />
                    <div>
                        <p className="text-gray-600 text-xs ml-2">{t("date")}</p>
                        <DatePicker
                            suffixIcon={null}
                            size="small"
                            variant="borderless"
                            placeholder={t("selectDate")}
                            className="text-gray-700 text-xs w-full"
                            format="DD MMM"
                            value={filters.date ? dayjs(filters.date) : null}
                            onChange={(date) => handleInputChange("date", date ? date.format("YYYY-MM-DD") : null)}
                        />
                    </div>
                </div>

                <Divider type="vertical" className="hidden sm:block h-10 bg-gray-300" />

                <div className="flex items-center w-full sm:w-1/6">
                    <MoonOutlined className="text-gray-700 text-xl" />
                    <div>
                        <p className="text-gray-600 text-xs ml-2">{t("nights")}</p>
                        <Select
                            defaultValue="1 Night"
                            variant="borderless"
                            size="small"
                            className="text-gray-700 w-full"
                            value={filters.nights}
                            onChange={(value) => handleInputChange("nights", value)}
                            suffixIcon={null}
                        >
                            {nightOptions.map((night) => (
                                <Option key={night} value={night}>
                                    {night}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>

                <Divider type="vertical" className="hidden sm:block h-10 bg-gray-300" />

                <div className="flex items-center w-full sm:w-1/6">
                    <TeamOutlined className="text-gray-700 text-xl" />
                    <div>
                        <p className="text-gray-600 text-xs ml-2">{t("participants")}</p>
                        <Select
                            defaultValue="2 People"
                            size="small"
                            className="text-gray-700 w-full"
                            value={filters.people}
                            variant="borderless"
                            onChange={(value) => handleInputChange("people", value)}
                            suffixIcon={null}
                        >
                            {peopleOptions.map((people) => (
                                <Option key={people} value={people}>
                                    {people}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>

            <Button
                onClick={handleSearchClick}
                type="primary"
                size="small"
                className="bg-orange-500 text-white font-semibold p-6 sm:p-6 m-4 rounded-md w-full sm:w-1/4 sm:h-full"
            >
                {t("search")}
            </Button>
        </div>
    );
}
