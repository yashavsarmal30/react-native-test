import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../constants';

const SuccessCheckmark = () => {
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: scaleAnim }],
                        opacity: opacityAnim
                    }
                ]}
            >
                <Ionicons name="checkmark" size={48} color={colors.success} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: spacing.lg,
    },
    circle: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: '#E8F5E9',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { SuccessCheckmark };
