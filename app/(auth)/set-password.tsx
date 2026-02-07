import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthLayout, Button, Input, ErrorMessage } from '../../src/components';
import { colors, spacing, typography, theme } from '../../src/constants';
import { validatePassword } from '../../src/utils/validation';

const SetPasswordScreen = () => {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const passValidation = validatePassword(password);

    const handleContinue = () => {
        if (!passValidation.isValid) {
            setErrorMsg('The password you\'ve entered is incorrect. Please try again.');
            setErrorVisible(true);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMsg('Passwords do not match.');
            setErrorVisible(true);
            return;
        }

        // Success - navigate to main app
        router.replace('/(root)/(tabs)');
    };

    const RequirementItem = ({ label, met }: { label: string, met: boolean }) => (
        <View style={styles.requirementRow}>
            <View style={[styles.bullet, met && styles.bulletMet]} />
            <Text style={[styles.requirementText, met && styles.requirementTextMet]}>
                {label}
            </Text>
        </View>
    );

    return (
        <AuthLayout>
            <View style={styles.card}>
                <Text style={styles.header}>Set Password</Text>

                <Input
                    label="New Password"
                    placeholder="New password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Input
                    label="Confirm Password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <View style={styles.requirementsContainer}>
                    <RequirementItem label="Minimum 8 characters" met={passValidation.requirements.hasMinLength} />
                    <RequirementItem label="At least one uppercase letter" met={passValidation.requirements.hasUppercase} />
                    <RequirementItem label="At least one number" met={passValidation.requirements.hasNumber} />
                    <RequirementItem label="At least one special character" met={passValidation.requirements.hasSpecialChar} />
                </View>

                <Button
                    title="Continue"
                    onPress={handleContinue}
                    style={styles.button}
                />
            </View>

            <ErrorMessage
                visible={errorVisible}
                title="Incorrect Password"
                message={errorMsg}
                onDismiss={() => setErrorVisible(false)}
            />
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        width: '100%',
    },
    header: {
        ...typography.subheader,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: spacing.xl,
    },
    requirementsContainer: {
        marginBottom: spacing.xl,
    },
    requirementRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.xs,
    },
    bullet: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors.placeholder,
        marginRight: spacing.sm,
    },
    bulletMet: {
        backgroundColor: colors.success,
    },
    requirementText: {
        ...typography.label,
        color: colors.secondary,
    },
    requirementTextMet: {
        color: colors.success,
    },
    button: {
        backgroundColor: colors.primary,
    },
});

export default SetPasswordScreen;
