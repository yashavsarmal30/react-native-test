import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/common/Header';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const SuspendCompanyScreen = ({ route, navigation }: any) => {
    const { companyId, companyName } = route.params;
    const [reason, setReason] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSuspend = () => {
        if (!accepted || !reason) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.popToTop();
        }, 1500);
    };

    const WarningItem = ({ text }: { text: string }) => (
        <View style={styles.warningItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.warningText}>{text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header title="Suspend Company?" showBack />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.warningBox}>
                    <View style={styles.warningHeader}>
                        <Ionicons name="warning" size={24} color={colors.status.error} />
                        <Text style={styles.warningTitle}>Are you sure you want to suspend {companyName}?</Text>
                    </View>

                    <Text style={styles.impactTitle}>Suspending this company will:</Text>
                    <WarningItem text="Immediately block all users from logging in" />
                    <WarningItem text="Pause all ongoing projects" />
                    <WarningItem text="Restrict access to dashboard data" />
                    <WarningItem text="Stop all active features" />
                </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Suspend Reason</Text>
                    <Input
                        label="Reason for suspension"
                        multiline
                        value={reason}
                        onChangeText={setReason}
                        placeholder="Enter reason for suspension"
                    />

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={() => setAccepted(!accepted)}
                    >
                        <View style={[styles.checkbox, accepted && styles.checkboxActive]}>
                            {accepted && <Ionicons name="checkmark" size={16} color={colors.text.white} />}
                        </View>
                        <Text style={styles.checkboxLabel}>I understand the impact of this action</Text>
                    </TouchableOpacity>

                    <Button
                        title="Suspend company"
                        variant="danger"
                        disabled={!accepted || !reason}
                        loading={loading}
                        onPress={handleSuspend}
                        style={styles.submitBtn}
                    />

                    <TouchableOpacity
                        style={styles.cancelBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerNote}>
                    You can reactivate the company anytime. This action does not delete any data.
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContent: {
        padding: spacing.md,
    },
    warningBox: {
        backgroundColor: '#FFF0F0',
        borderRadius: 8,
        padding: spacing.md,
        marginBottom: spacing.lg,
        borderWidth: 1,
        borderColor: '#FFD1D1',
    },
    warningHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    warningTitle: {
        ...typography.bodyBold,
        color: colors.status.error,
        marginLeft: spacing.sm,
        flex: 1,
    },
    impactTitle: {
        ...typography.caption,
        fontWeight: '700',
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    warningItem: {
        flexDirection: 'row',
        marginBottom: 4,
        paddingLeft: spacing.xs,
    },
    bullet: {
        color: colors.text.primary,
        marginRight: spacing.sm,
    },
    warningText: {
        ...typography.caption,
        color: colors.text.secondary,
    },
    form: {
        marginTop: spacing.sm,
    },
    label: {
        ...typography.bodyBold,
        color: colors.text.secondary,
        marginBottom: spacing.sm,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spacing.md,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.primary,
        marginRight: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxActive: {
        backgroundColor: colors.primary,
    },
    checkboxLabel: {
        ...typography.caption,
        color: colors.text.primary,
        fontWeight: '600',
    },
    submitBtn: {
        marginTop: spacing.md,
    },
    cancelBtn: {
        marginTop: spacing.md,
        paddingVertical: spacing.md,
        alignItems: 'center',
    },
    cancelText: {
        ...typography.body,
        color: colors.text.secondary,
        textDecorationLine: 'underline',
    },
    footerNote: {
        ...typography.tiny,
        color: colors.status.error,
        textAlign: 'center',
        marginTop: spacing.xl,
        fontStyle: 'italic',
    }
});

export default SuspendCompanyScreen;
