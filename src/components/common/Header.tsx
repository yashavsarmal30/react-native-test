import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';

interface HeaderProps {
    title: string;
    subtitle?: string;
    showBack?: boolean;
    onBack?: () => void;
    rightIcon?: React.ReactNode;
    gradient?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    showBack,
    onBack,
    rightIcon,
    gradient = false,
}) => {
    const navigation = useNavigation();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigation.goBack();
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, gradient && styles.gradientBackground]}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.left}>
                    {showBack && (
                        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                            <Ionicons name="arrow-back" size={24} color={colors.text.white} />
                        </TouchableOpacity>
                    )}
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                </View>
                <View style={styles.right}>{rightIcon}</View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: colors.primary,
    },
    gradientBackground: {
        // In a real app we'd use LinearGradient here, using solid color for now
        backgroundColor: '#8B1A1A',
    },
    container: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.md,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: spacing.md,
    },
    title: {
        ...typography.h3,
        color: colors.text.white,
    },
    subtitle: {
        ...typography.caption,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
