import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../constants';
import BackgroundImage from './BackgroundImage';

interface AuthLayoutProps {
    children: React.ReactNode;
    showBackground?: boolean;
    blurBackground?: number;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
    children,
    showBackground = false,
    blurBackground = 0,
}) => {
    const content = (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.innerContainer}>
                        {children}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

    if (showBackground) {
        return <BackgroundImage blur={blurBackground}>{content}</BackgroundImage>;
    }

    return <View style={styles.whiteBackground}>{content}</View>;
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    innerContainer: {
        flex: 1,
        padding: spacing.lg,
        justifyContent: 'center',
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: colors.white,
    },
});

export default AuthLayout;
