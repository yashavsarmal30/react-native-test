import React from 'react';
import { StyleSheet, View, ImageBackground, ViewStyle } from 'react-native';
import { colors } from '../../constants';

interface BackgroundImageProps {
    children: React.ReactNode;
    blur?: number;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, blur = 0 }) => {
    return (
        <ImageBackground
            source={require('../../../assets/images/japan.png')}
            style={styles.backgroundImage}
            blurRadius={blur}
        >
            <View style={styles.overlay}>
                {children}
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: colors.overlay,
    },
});

export default BackgroundImage;
