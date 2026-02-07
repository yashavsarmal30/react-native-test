import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';

interface BadgeProps {
    label: string;
    type?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
    style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({ label, type = 'neutral', style }) => {
    const getBadgeStyles = () => {
        switch (type) {
            case 'success':
                return {
                    container: { backgroundColor: colors.status.success + '20' },
                    text: { color: colors.status.success },
                };
            case 'error':
                return {
                    container: { backgroundColor: colors.status.error + '20' },
                    text: { color: colors.status.error },
                };
            case 'warning':
                return {
                    container: { backgroundColor: colors.status.warning + '20' },
                    text: { color: colors.status.warning },
                };
            case 'info':
                return {
                    container: { backgroundColor: colors.status.info + '20' },
                    text: { color: colors.status.info },
                };
            default:
                return {
                    container: { backgroundColor: colors.secondary + '20' },
                    text: { color: colors.secondary },
                };
        }
    };

    const badgeStyles = getBadgeStyles();

    return (
        <View style={[styles.container, badgeStyles.container, style]}>
            <Text style={[styles.text, badgeStyles.text]}>{label.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: spacing.sm,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    text: {
        ...typography.tiny,
        fontWeight: '700',
    },
});
