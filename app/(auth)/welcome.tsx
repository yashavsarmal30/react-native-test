import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthLayout, Button, Input } from '../../src/components';
import { colors, spacing, typography, theme } from '../../src/constants';
import { validateEmail, validatePhone } from '../../src/utils/validation';

const WelcomeScreen = () => {
    const router = useRouter();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleContinue = () => {
        if (!identifier || !password) {
            setErrorMessage('Please enter both phone/email and password.');
            setErrorVisible(true);
            return;
        }

        // For demo purposes, we'll navigate to OTP or just proceed
        // The prompt says "Transition to OTP screen on success" in SignInScreen
        // But WelcomeScreen has "Log in with OTP" link
        // I'll simulate a login or transition
        router.push('/(auth)/otp');
    };

    return (
        <AuthLayout showBackground>
            <View style={styles.card}>
                <Text style={styles.header}>Welcome back !</Text>
                <Text style={styles.subheader}>Sign In</Text>

                <Input
                    label=""
                    placeholder="Enter phone number/Email"
                    value={identifier}
                    onChangeText={setIdentifier}
                    containerStyle={styles.inputContainer}
                />

                <Input
                    label=""
                    placeholder="Enter password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    containerStyle={styles.inputContainer}
                />

                <View style={styles.footerLinks}>
                    <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
                        <Text style={styles.otpLink}>Log in with OTP</Text>
                    </TouchableOpacity>
                </View>

                <Button
                    title="Continue"
                    onPress={handleContinue}
                    style={styles.button}
                />
            </View>
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: spacing.lg,
        width: '100%',
        ...theme.shadow,
    },
    header: {
        ...typography.header,
        textAlign: 'center',
        marginBottom: spacing.xs,
    },
    subheader: {
        ...typography.subheader,
        textAlign: 'center',
        marginBottom: spacing.lg,
        color: colors.secondary,
    },
    inputContainer: {
        marginBottom: spacing.sm,
    },
    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: spacing.lg,
    },
    otpLink: {
        ...typography.label,
        color: colors.secondary,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: colors.primary,
    },
});

export default WelcomeScreen;
