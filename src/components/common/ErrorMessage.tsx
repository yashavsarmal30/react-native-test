import React from 'react';
import {
    Modal,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
} from 'react-native';
import { colors, spacing, typography, theme } from '../../constants';
import { Button } from './Button';

interface ErrorMessageProps {
    visible: boolean;
    title: string;
    message: string;
    onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    visible,
    title,
    message,
    onDismiss,
}) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <Button
                        title="Ok"
                        onPress={onDismiss}
                        style={styles.button}
                        fullWidth={false}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 16,
        padding: spacing.lg,
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: colors.primary,
        ...theme.shadow,
    },
    title: {
        ...typography.subheader,
        marginBottom: spacing.sm,
        textAlign: 'center',
    },
    message: {
        ...typography.body,
        textAlign: 'center',
        marginBottom: spacing.lg,
        color: colors.secondary,
    },
    button: {
        minWidth: 100,
    },
});

export { ErrorMessage };
