import { View, Text, TextInput, TextInputProps } from 'react-native';
import React from 'react';

interface CustomInputProps extends TextInputProps {
    label: string;
    error?: string;
    containerStyle?: string;
}

const CustomInput = ({
    label,
    error,
    containerStyle = '',
    ...props
}: CustomInputProps) => {
    return (
        <View className={`mb-4 ${containerStyle}`}>
            <Text className="text-[#6E6E6E] mb-2 font-semibold text-sm">{label}</Text>
            <TextInput
                className={`border-b pb-1 text-lg ${error ? 'border-red-500' : 'border-[#6E6E6E]'
                    }`}
                placeholderTextColor="#9BA1A6"
                {...props}
            />
            {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
        </View>
    );
};

export default CustomInput;
