"use client";
import { Checkbox, Button } from 'antd';
import React, { useState } from 'react';
import { useLanguageStore } from '@/stores/useLanguageStore';

const HotelConceptSelector: React.FC = () => {
    const { t } = useLanguageStore();
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleCheckboxChange = (checkedValues: string[]) => {
        setSelectedValues(checkedValues);
    };

    const handleReset = () => {
        setSelectedValues([]);
    };

    const concepts = [
        { key: 'beachHotel', label: t('beachHotel') },
        { key: 'adultHotel', label: t('adultHotel') },
        { key: 'boutiqueHotel', label: t('boutiqueHotel') },
        { key: 'familyHotel', label: t('familyHotel') },
        { key: 'petFriendly', label: t('petFriendly') }
    ];

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <label className="text-xs">{t('hotelConcept')}</label>
                {selectedValues.length > 0 && (
                    <Button
                        type="link"
                        className="text-orange-500 text-xs"
                        onClick={handleReset}
                    >
                        {t('reset')}
                    </Button>
                )}
            </div>
            <Checkbox.Group
                className="flex flex-col space-y-2"
                value={selectedValues}
                onChange={handleCheckboxChange}
            >
                {concepts.map((concept) => (
                    <Checkbox key={concept.key} value={concept.label} className="custom-checkbox">
                        {concept.label}
                    </Checkbox>
                ))}
            </Checkbox.Group>
        </div>
    );
};

export default HotelConceptSelector;
