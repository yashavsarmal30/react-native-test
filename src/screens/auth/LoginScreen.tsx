import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const LoginScreen = ({ navigation }: any) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigation.navigate('MainTabs');
        }, 1500);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.card}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoPlaceholder}>
                        <Text style={styles.logoText}>SA</Text>
                    </View>
                    <Text style={styles.title}>SuperAdmin</Text>
                    <Text style={styles.subtitle}>Management System</Text>
                </View>

                <View style={styles.form}>
                    <Input
                        label="Email Address"
                        placeholder="Enter your email"
                        type="email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry
                        type="password"
                    />

                    <Button
                        title="Sign In"
                        onPress={handleLogin}
                        loading={loading}
                        style={styles.loginBtn}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        justifyContent: 'center',
        backgroundColor: colors.surface
    },
    card: {
        backgroundColor: colors.background,
        borderRadius: 16,
        padding: spacing.xl,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: spacing.xl,
    },
    logoPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    logoText: {
        ...typography.h3,
        color: colors.text.white,
        fontWeight: 'bold',
    },
    title: {
        ...typography.h2,
        color: colors.primary,
        textAlign: 'center',
    },
    subtitle: {
        ...typography.caption,
        color: colors.text.secondary,
        textAlign: 'center',
    },
    form: {
        marginTop: spacing.md,
    },
    loginBtn: {
        marginTop: spacing.lg,
    }
});

export default LoginScreen;
