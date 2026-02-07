import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../components/common/Header';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { colors } from '../../constants/colors';
import { spacing } from '../../constants/spacing';
import { typography } from '../../constants/typography';

const ChangePasswordScreen = ({ navigation }: any) => {
    const [step, setStep] = useState(1);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (step === 1) {
            if (!oldPassword) return;
            setStep(2);
        } else if (step === 2) {
            if (!newPassword || newPassword !== confirmPassword) return;
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setStep(3);
                // Auto redirect after 2 seconds
                setTimeout(() => {
                    navigation.navigate('Profile');
                }, 2000);
            }, 1500);
        }
    };

    const renderStep1 = () => (
        <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Enter your old Password</Text>
            <Input
                label="Old password"
                secureTextEntry
                value={oldPassword}
                onChangeText={setOldPassword}
                placeholder="Enter your current password"
            />
            <Button
                title="Continue"
                onPress={handleNext}
                disabled={!oldPassword}
                style={styles.continueBtn}
            />
        </View>
    );

    const renderStep2 = () => (
        <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Enter new Password</Text>
            <Input
                label="New Password"
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="At least 8 characters"
            />
            <Input
                label="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Match new password"
                error={confirmPassword && newPassword !== confirmPassword ? 'Passwords do not match' : ''}
            />
            <Button
                title="Update Password"
                onPress={handleNext}
                disabled={!newPassword || newPassword !== confirmPassword}
                loading={loading}
                style={styles.continueBtn}
            />
        </View>
    );

    const renderStep3 = () => (
        <View style={styles.successContainer}>
            <View style={styles.successCircle}>
                <Ionicons name="checkmark" size={60} color={colors.status.success} />
            </View>
            <Text style={styles.successTitle}>Password updated</Text>
            <Text style={styles.successSubtitle}>Redirecting to profile...</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header title="Change Password" showBack />

            <View style={styles.content}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content: {
        padding: spacing.lg,
        flex: 1,
        justifyContent: 'center',
    },
    stepContainer: {
        width: '100%',
    },
    stepTitle: {
        ...typography.h3,
        color: colors.text.primary,
        textAlign: 'center',
        marginBottom: spacing.xl,
    },
    continueBtn: {
        marginTop: spacing.xl,
    },
    successContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    successCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: colors.status.success + '20',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    successTitle: {
        ...typography.h2,
        color: colors.text.primary,
        marginBottom: spacing.sm,
    },
    successSubtitle: {
        ...typography.body,
        color: colors.text.secondary,
    },
});

export default ChangePasswordScreen;
