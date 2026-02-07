import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthLayout, Button, Input, ErrorMessage } from '../../src/components';
import { colors, spacing, typography, theme } from '../../src/constants';
import { validatePhone } from '../../src/utils/validation';

const SignInScreen = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSendOTP = () => {
        if (!validatePhone(phoneNumber)) {
            setErrorMsg('The phone number you\'ve entered is incorrect. Please try again.');
            setErrorVisible(true);
            return;
        }
        // Simulate navigation to OTP screen
        router.push({
            pathname: '/(auth)/otp',
            params: { phone: phoneNumber }
        });
    };

    return (
        <AuthLayout showBackground blurBackground={2}>
            <View style={styles.card}>
                <Text style={styles.header}>Sign In</Text>

                <Input
                    label="Phone Number"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                />

                <Button
                    title="Send OTP"
                    onPress={handleSendOTP}
                    style={styles.button}
                />
            </View>

            <ErrorMessage
                visible={errorVisible}
                title="Incorrect Phone Number"
                message={errorMsg}
                onDismiss={() => setErrorVisible(false)}
            />
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: spacing.lg,
        width: '100%',
        marginTop: 'auto', // Position center-bottom as per spec
        ...theme.shadow,
    },
    header: {
        ...typography.subheader, // Spec says 24px weight 700, which is subheader/header mix
        fontSize: 24,
        fontWeight: '700',
        marginBottom: spacing.lg,
    },
    button: {
        backgroundColor: colors.primary,
        marginTop: spacing.sm,
    },
});

export default SignInScreen;
