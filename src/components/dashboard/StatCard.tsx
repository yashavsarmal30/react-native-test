import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';
import { Card } from '../common/Card';

interface StatCardProps {
    title: string;
    value: string | number;
    icon?: keyof typeof Ionicons.glyphMap;
    iconColor?: string;
    progress?: {
        percentage: number;
        color: string;
    };
    subtitle?: string;
    onPress?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    icon,
    iconColor,
    progress,
    subtitle,
    onPress,
}) => {
    return (
        <Card style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
                {icon && (
                    <Ionicons name={icon} size={20} color={iconColor || colors.primary} />
                )}
            </View>
            <View style={styles.body}>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>{value}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
                {progress && (
                    <View style={styles.progressPlaceholder}>
                        {/* We'll pass the progress color here */}
                        <View style={[styles.progressDot, { backgroundColor: progress.color }]} />
                    </View>
                )}
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: spacing.xs,
        minHeight: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    title: {
        ...typography.tiny,
        fontWeight: '700',
        color: colors.text.secondary,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    valueContainer: {
        flex: 1,
    },
    value: {
        ...typography.h2,
        color: colors.text.primary,
    },
    subtitle: {
        ...typography.tiny,
        color: colors.text.secondary,
        marginTop: 2,
    },
    progressPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    }
});
