import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
    progress: number; // 0 to 1
    size?: number;
    strokeWidth?: number;
    color?: string;
    totalValue?: string | number;
    label?: string;
}

const CircularProgress = ({
    progress,
    size = 120,
    strokeWidth = 10,
    color = '#A52A2A',
    totalValue,
    label,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const animatedProgress = useSharedValue(0);

    useEffect(() => {
        animatedProgress.value = withTiming(progress, { duration: 1000 });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: circumference * (1 - animatedProgress.value),
    }));

    return (
        <View className="items-center justify-center">
            <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#F5E6D3"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Progress Circle */}
                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                    fill="none"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>
            <View className="absolute items-center justify-center">
                {totalValue && (
                    <Text className="text-2xl font-bold text-black">{totalValue}</Text>
                )}
                {label && (
                    <Text className="text-[10px] text-[#6E6E6E] font-medium text-center px-4">
                        {label}
                    </Text>
                )}
            </View>
        </View>
    );
};

export default CircularProgress;
