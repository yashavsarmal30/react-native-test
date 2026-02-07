import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
    colors,
    typography,
    spacing,
    borderRadius: {
        sm: 8,
        md: 16,
        lg: 24,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
};
