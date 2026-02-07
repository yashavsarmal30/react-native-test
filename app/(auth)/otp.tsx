import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { AuthLayout, Button, Input, SuccessCheckmark } from '../../src/components';
import { colors, spacing, typography, theme } from '../../src/constants';
import { validateOTP } from '../../src/utils/validation';

const OTPVerificationScreen = () => {
    const router = useRouter();
    const { phone } = useLocalSearchParams();
    const [otp, setOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleContinue = () => {
        if (!validateOTP(otp)) {
            // Show error? For now just return
            return;
        }

        setIsVerifying(true);
        // Simulate verification delay
        setTimeout(() => {
            setIsVerifying(false);
            setIsSuccess(true);
            // After success animation, navigate to set password
            setTimeout(() => {
                router.push('/(auth)/set-password');
            }, 1500);
        }, 1000);
    };

    return (
        <AuthLayout>
            <View style={styles.card}>
                <View style={styles.successContainer}>
                    <View style={styles.successCard}>
                        <SuccessCheckmark />
                        <Text style={styles.successText}>OTP Sent</Text>
                    </View>
                </View>

                <Text style={styles.header}>Sign In</Text>

                <Input
                    label="Phone Number"
                    placeholder="Phone Number"
                    value={phone as string || '9876543210'}
                    onChangeText={() => { }} // Read-only in this screen
                    containerStyle={styles.readOnlyInput}
                />

                <Input
                    label="OTP"
                    placeholder="Enter OTP code"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="number-pad"
                />

                <Button
                    title="Continue"
                    onPress={handleContinue}
                    loading={isVerifying}
                    style={styles.button}
                />
            </View>
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: spacing.lg,
        alignItems: 'center',
        width: '100%',
    },
    successContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    successCard: {
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: spacing.md,
        alignItems: 'center',
        width: '100%',
        ...theme.shadow,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    successText: {
        ...typography.subheader,
        marginTop: spacing.sm,
        fontWeight: '700',
    },
    header: {
        ...typography.subheader,
        fontSize: 24,
        fontWeight: '700',
        marginBottom: spacing.lg,
        alignSelf: 'flex-start',
    },
    readOnlyInput: {
        opacity: 0.7,
    },
    button: {
        backgroundColor: colors.primary,
        marginTop: spacing.md,
    },
});

export default OTPVerificationScreen;
