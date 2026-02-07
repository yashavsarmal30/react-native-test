import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TextInputProps,
    ViewStyle,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';

interface InputProps extends TextInputProps {
    label: string;
    error?: string;
    containerStyle?: ViewStyle;
    prefix?: string;
    icon?: React.ReactNode;
    required?: boolean;
    type?: 'text' | 'email' | 'phone' | 'password';
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    containerStyle,
    prefix,
    icon,
    required,
    value,
    onFocus,
    onBlur,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusAnim = useSharedValue(value ? 1 : 0);

    const labelStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        focusAnim.value,
                        [0, 1],
                        [22, 0],
                        Extrapolate.CLAMP
                    ),
                },
                {
                    scale: interpolate(focusAnim.value, [0, 1], [1, 0.8], Extrapolate.CLAMP),
                },
            ],
            color: error ? colors.status.error : focusAnim.value ? colors.primary : colors.secondary,
        };
    });

    const borderStyle = useAnimatedStyle(() => {
        return {
            borderColor: error
                ? colors.status.error
                : focusAnim.value
                    ? colors.primary
                    : colors.border,
            borderWidth: focusAnim.value || error ? 1.5 : 1,
        };
    });

    const handleFocus = (e: any) => {
        setIsFocused(true);
        focusAnim.value = withTiming(1, { duration: 200 });
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        if (!value) {
            focusAnim.value = withTiming(0, { duration: 200 });
        }
        onBlur?.(e);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.Text style={[styles.label, labelStyle]}>
                {label}
                {required && <Text style={{ color: colors.status.error }}> *</Text>}
            </Animated.Text>
            <Animated.View style={[styles.inputContainer, borderStyle]}>
                {prefix && <Text style={styles.prefix}>{prefix}</Text>}
                {icon && <View style={styles.iconContainer}>{icon}</View>}
                <TextInput
                    style={[styles.input, props.multiline && styles.multilineInput]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    placeholder={isFocused ? props.placeholder : ''}
                    placeholderTextColor={colors.secondary}
                    {...props}
                />
            </Animated.View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.md,
        width: '100%',
    },
    label: {
        position: 'absolute',
        left: spacing.md,
        ...typography.caption,
        zIndex: 1,
        backgroundColor: 'transparent',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.inputBackground,
        borderRadius: 8,
        paddingHorizontal: spacing.md,
        height: 56,
        marginTop: 10,
    },
    input: {
        flex: 1,
        ...typography.body,
        color: colors.text.primary,
        height: '100%',
        paddingVertical: 0,
    },
    multilineInput: {
        height: 100,
        textAlignVertical: 'top',
        paddingTop: spacing.md,
    },
    prefix: {
        ...typography.body,
        color: colors.text.primary,
        marginRight: spacing.xs,
    },
    iconContainer: {
        marginRight: spacing.sm,
    },
    errorText: {
        ...typography.tiny,
        color: colors.status.error,
        marginTop: spacing.xs,
        marginLeft: spacing.xs,
    },
});
