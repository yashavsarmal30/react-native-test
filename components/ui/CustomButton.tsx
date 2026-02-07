import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from 'react';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    loading?: boolean;
    disabled?: boolean;
    className?: string;
}

const CustomButton = ({
    title,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
    className = '',
}: CustomButtonProps) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-[#A52A2A]';
            case 'secondary':
                return 'bg-[#6E6E6E]';
            case 'outline':
                return 'border border-[#A52A2A]';
            case 'danger':
                return 'bg-red-600';
            default:
                return 'bg-[#A52A2A]';
        }
    };

    const getTextColor = () => {
        if (variant === 'outline') return 'text-[#A52A2A]';
        return 'text-white';
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
            className={`py-4 rounded-xl items-center justify-center flex-row ${getVariantStyles()} ${(disabled || loading) ? 'opacity-50' : ''
                } ${className}`}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'outline' ? '#A52A2A' : '#FFFFFF'} />
            ) : (
                <Text className={`text-center font-bold text-lg ${getTextColor()}`}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
