import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from '../common/Badge';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';
import { Company } from '../../types';

interface CompanyListItemProps {
    company: Company;
    onPress: () => void;
}

export const CompanyListItem: React.FC<CompanyListItemProps> = ({
    company,
    onPress,
}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.left}>
                <View style={styles.header}>
                    <Text style={styles.name}>{company.name}</Text>
                    <Badge
                        label={company.status}
                        type={company.status === 'active' ? 'success' : 'error'}
                    />
                </View>

                <View style={styles.infoRow}>
                    <Ionicons name="person-outline" size={14} color={colors.secondary} />
                    <Text style={styles.infoText}>{company.adminName}</Text>
                </View>

                <View style={styles.infoRow}>
                    <Ionicons name="location-outline" size={14} color={colors.secondary} />
                    <Text style={styles.infoText} numberOfLines={1}>{company.address}</Text>
                </View>

                <Text style={styles.dateText}>Created On: {company.createdAt}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.secondary} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: spacing.md,
        borderRadius: 12,
        marginBottom: spacing.sm,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    left: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    name: {
        ...typography.bodyBold,
        color: colors.text.primary,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    infoText: {
        ...typography.caption,
        color: colors.text.secondary,
        marginLeft: 4,
    },
    dateText: {
        ...typography.tiny,
        color: colors.text.secondary,
        marginTop: spacing.sm,
    },
});
