export const typography = {
    h1: { fontSize: 28, fontWeight: '700', lineHeight: 34 },
    h2: { fontSize: 24, fontWeight: '700', lineHeight: 30 },
    h3: { fontSize: 20, fontWeight: '600', lineHeight: 26 },
    h4: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
    body: { fontSize: 16, fontWeight: '400', lineHeight: 22 },
    bodyBold: { fontSize: 16, fontWeight: '600', lineHeight: 22 },
    caption: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
    small: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
    tiny: { fontSize: 10, fontWeight: '400', lineHeight: 14 },
    header: { fontSize: 28, fontWeight: '700', lineHeight: 34 },
    subheader: { fontSize: 24, fontWeight: '700', lineHeight: 30 },
    label: { fontSize: 16, fontWeight: '600', lineHeight: 22 },
} as const;

export type TypographyVariant = keyof typeof typography;
