"use client";

import { Input, Select, DatePicker, Radio, Button } from "antd";
import { CalendarOutlined, EnvironmentOutlined, GlobalOutlined, MoonOutlined, TeamOutlined, FilterOutlined, StarFilled } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";
import React, { useState, useEffect } from "react";
import HotelConceptSelector from "@/app/components/ConceptSelector";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useFilterStore } from "@/stores/useFilterStore";

const { Option } = Select;

const FilterSidebar: React.FC = () => {
    const { t } = useLanguageStore();
    const { filters, setFilter } = useFilterStore();
    const [filtersOpen, setFiltersOpen] = useState(true);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(filters.date ? dayjs(filters.date) : null);

    useEffect(() => {
        setSelectedDate(filters.date ? dayjs(filters.date) : null);
    }, [filters.date]);

    const handleInputChange = (key: keyof typeof filters, value: string) => {
        setFilter(key,value);
    };

    const handleDateChange = (date: Dayjs | null) => {
        const dateValue = date ? date.format("YYYY-MM-DD") : "";
        setSelectedDate(date);
        setFilter('date', dateValue );
    };

    return (
        <>
            <div className="lg:hidden flex items-end justify-between">
                <span></span>
                <Button
                    type="text"
                    icon={<FilterOutlined />}
                    onClick={() => setFiltersOpen(!filtersOpen)}
                >
                    {filtersOpen ? t("hideFilters") : t("showFilters")}
                </Button>
            </div>
            <div className={`filter-sidebar ${filtersOpen ? "block" : "hidden"} lg:block`}>
                <h2 className="text-xs">{t("filter")}</h2>

                <div className="mb-4">
                    <Input
                        size="large"
                        placeholder={t("from")}
                        prefix={<EnvironmentOutlined style={{ color: "#4A5568" }} />}
                        className="rounded-md"
                        value={filters.from}
                        onChange={(e) => handleInputChange("from", e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        size="large"
                        placeholder={t("destination")}
                        prefix={<GlobalOutlined style={{ color: "#4A5568" }} />}
                        className="rounded-md"
                        value={filters.destination}
                        onChange={(e) => handleInputChange("destination", e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="text-xs mb-4">{t("participants")}</label>
                    <div className="flex items-center space-x-2 w-full sm:w-auto border rounded-lg">
                        <TeamOutlined style={{ color: "#4A5568", marginLeft: 14 }} />
                        <Select
                            size="large"
                            className="w-full"
                            value={filters.people}
                            variant={"borderless"}
                            onChange={(val) => handleInputChange("people", val)}
                        >
                            {Array.from({ length: 30 }, (_, i) => `${i + 1} ${t("person")}`).map((option) => (
                                <Option key={option} value={option}>{option}</Option>
                            ))}
                        </Select>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-xs mb-4">{t("date")}</label>
                    <div className="flex items-center space-x-2 w-full sm:w-auto border rounded-lg">
                        <CalendarOutlined className="text-gray-700 text-xl ml-3" />
                        <DatePicker
                            size="large"
                            placeholder={t("selectDate")}
                            variant={"borderless"}
                            format="DD MMM"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="w-full rounded-md"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-xs mb-4">{t("nights")}</label>
                    <div className="flex items-center space-x-2 w-full sm:w-auto border rounded-lg">
                        <MoonOutlined style={{ color: "#4A5568", marginLeft: 14 }} />
                        <Select
                            size="large"
                            className="w-full"
                            value={filters.nights}
                            variant={"borderless"}
                            onChange={(val) => handleInputChange("nights", val)}
                        >
                            {Array.from({ length: 30 }, (_, i) => `${i + 1} ${t("night")}`).map((option) => (
                                <Option key={option} value={option}>{option}</Option>
                            ))}
                        </Select>
                    </div>
                </div>

                <HotelConceptSelector />

                <h3 className="text-xs mt-4">{t("star")}</h3>
                <Radio.Group
                    className="flex flex-col space-y-2 custom-ratio-input"
                    onChange={(e) => handleInputChange("rating", e.target.value)}
                    value={filters.rating}
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <Radio key={value} value={value.toString()}>
                            <StarFilled style={{ color: "#FFA500", marginRight: 4, }} /> {value}+
                        </Radio>
                    ))}
                </Radio.Group>
            </div>
        </>
    );
};

export default FilterSidebar;
