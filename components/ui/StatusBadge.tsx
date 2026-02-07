import { View, Text } from 'react-native';
import React from 'react';

interface StatusBadgeProps {
    status: 'active' | 'suspended' | 'inactive';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
    const getStyles = () => {
        switch (status) {
            case 'active':
                return {
                    bg: 'bg-[#E6F4EA]',
                    text: 'text-[#1E8E3E]',
                    label: 'Active',
                };
            case 'suspended':
                return {
                    bg: 'bg-[#FCE8E6]',
                    text: 'text-[#D93025]',
                    label: 'Suspended',
                };
            case 'inactive':
                return {
                    bg: 'bg-[#F1F3F4]',
                    text: 'text-[#5F6368]',
                    label: 'Inactive',
                };
            default:
                return {
                    bg: 'bg-[#F1F3F4]',
                    text: 'text-[#5F6368]',
                    label: status,
                };
        }
    };

    const { bg, text, label } = getStyles();

    return (
        <View className={`px-2 py-1 rounded-md ${bg}`}>
            <Text className={`text-[10px] font-bold uppercase ${text}`}>{label}</Text>
        </View>
    );
};

export default StatusBadge;
