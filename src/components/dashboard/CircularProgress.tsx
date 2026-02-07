import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';

interface CircularProgressProps {
    size: number;
    strokeWidth: number;
    percentage: number;
    color: string;
    label?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    size,
    strokeWidth,
    percentage,
    color,
    label,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={size} height={size}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={colors.border}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>
            <View style={styles.labelContainer}>
                {label && <Text style={styles.label}>{label}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        ...typography.h4,
        color: colors.text.primary,
    },
});
