import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';

interface ButtonProps {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: React.ReactNode;
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

export const Button: React.FC<ButtonProps> = ({
    onPress,
    title,
    variant = 'primary',
    size = 'medium',
    fullWidth = true,
    disabled = false,
    loading = false,
    style,
    textStyle,
    icon,
}) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const onPressIn = () => {
        scale.value = withSpring(0.95);
    };

    const onPressOut = () => {
        scale.value = withSpring(1);
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'secondary':
                return {
                    button: { backgroundColor: colors.secondary },
                    text: { color: colors.text.white },
                };
            case 'outline':
                return {
                    button: {
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: colors.primary,
                    },
                    text: { color: colors.primary },
                };
            case 'danger':
                return {
                    button: { backgroundColor: colors.status.error },
                    text: { color: colors.text.white },
                };
            default:
                return {
                    button: { backgroundColor: colors.primary },
                    text: { color: colors.text.white },
                };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return {
                    button: { paddingVertical: spacing.xs, paddingHorizontal: spacing.md },
                    text: { ...typography.small },
                };
            case 'large':
                return {
                    button: { paddingVertical: spacing.md, paddingHorizontal: spacing.xl },
                    text: { ...typography.h4 },
                };
            default:
                return {
                    button: { paddingVertical: spacing.sm, paddingHorizontal: spacing.lg },
                    text: { ...typography.bodyBold },
                };
        }
    };

    const variantStyles = getVariantStyles();
    const sizeStyles = getSizeStyles();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            disabled={disabled || loading}
            style={[
                styles.button,
                sizeStyles.button,
                variantStyles.button,
                fullWidth && styles.fullWidth,
                disabled && styles.disabled,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={variantStyles.text.color} size="small" />
            ) : (
                <>
                    {icon && <ActivityIndicator style={{ marginRight: spacing.sm }} />}
                    <Text style={[styles.text, sizeStyles.text, variantStyles.text, textStyle]}>
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullWidth: {
        width: '100%',
    },
    disabled: {
        opacity: 0.6,
    },
    text: {
        textAlign: 'center',
    },
});
