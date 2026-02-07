import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { colors } from '../../constants/colors';

interface LoadingSpinnerProps {
    visible: boolean;
    overlay?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    visible,
    overlay = false,
}) => {
    if (!visible) return null;

    if (overlay) {
        return (
            <Modal transparent visible={visible}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <View style={styles.inline}>
            <ActivityIndicator size="large" color={colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: colors.background,
        padding: 30,
        borderRadius: 12,
    },
    inline: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
