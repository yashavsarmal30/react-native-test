import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { colors } from '../../constants/colors';
import { typography } from '../../constants/typography';
import { spacing } from '../../constants/spacing';

interface CardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
    titleStyle?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    children,
    onPress,
    style,
    titleStyle,
}) => {
    const Content = (
        <View style={[styles.card, style]}>
            {(title || subtitle) && (
                <View style={[styles.header, titleStyle]}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            )}
            <View style={styles.content}>{children}</View>
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
                {Content}
            </TouchableOpacity>
        );
    }

    return Content;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: spacing.md,
        marginBottom: spacing.md,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        marginBottom: spacing.md,
    },
    title: {
        ...typography.h4,
        color: colors.text.primary,
    },
    subtitle: {
        ...typography.caption,
        color: colors.text.secondary,
        marginTop: 2,
    },
    content: {
        flexDirection: 'column',
    },
});
