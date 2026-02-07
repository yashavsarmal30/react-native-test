import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';
import { formatRelativeTime } from '../../utils/formatters';

interface SystemAlertProps {
    type: 'new_company' | 'suspension' | 'warning';
    message: string;
    timestamp: string;
    onPress?: () => void;
}

export const SystemAlert: React.FC<SystemAlertProps> = ({
    type,
    message,
    timestamp,
    onPress,
}) => {
    const getAlertConfig = () => {
        switch (type) {
            case 'suspension':
                return { icon: 'alert-circle', color: colors.status.error, title: 'Company Suspended' };
            case 'warning':
                return { icon: 'warning', color: colors.status.warning, title: 'Inactive Company Warning' };
            default:
                return { icon: 'business', color: colors.status.success, title: 'New Company Created' };
        }
    };

    const config = getAlertConfig();

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.iconContainer, { backgroundColor: config.color + '15' }]}>
                <Ionicons name={config.icon as any} size={20} color={config.color} />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{config.title}</Text>
                    <Text style={styles.time}>{formatRelativeTime(timestamp)}</Text>
                </View>
                <Text style={styles.message} numberOfLines={1}>
                    {message}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: spacing.md,
    },
    content: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    title: {
        ...typography.bodyBold,
        fontSize: 14,
        color: colors.text.primary,
    },
    time: {
        ...typography.tiny,
        color: colors.text.secondary,
    },
    message: {
        ...typography.caption,
        color: colors.text.secondary,
    },
});
