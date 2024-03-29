import type { ThemeOptions } from '@mui/material'
import type { TypographyOptions } from '@mui/material/styles/createTypography'

const variants = {
  displayXLarge: { fontWeight: 700, fontSize: 72, lineHeight: 90 / 72, textTransform: 'uppercase' },
  displayLarge: { fontWeight: 700, fontSize: 48, lineHeight: 56 / 48, textTransform: 'uppercase' },
  displayMedium: { fontWeight: 700, fontSize: 40, lineHeight: 48 / 40, textTransform: 'uppercase' },
  displaySmall: { fontWeight: 700, fontSize: 32, lineHeight: 40 / 32, textTransform: 'uppercase' },

  stylizedLarge: { fontWeight: 700, fontSize: 24, lineHeight: 32 / 24, textTransform: 'uppercase' },
  stylizedMedium: { fontWeight: 700, fontSize: 20, lineHeight: 28 / 20, textTransform: 'uppercase' },
  stylizedSmall: { fontWeight: 700, fontSize: 18, lineHeight: 26 / 18, textTransform: 'uppercase' },

  headlineLarge: { fontWeight: 400, fontSize: 32, lineHeight: 40 / 32 },
  headlineMedium: { fontWeight: 400, fontSize: 28, lineHeight: 36 / 28 },
  headlineSmall: { fontWeight: 400, fontSize: 24, lineHeight: 32 / 24 },

  titleLarge: { fontWeight: 500, fontSize: 22, lineHeight: 28 / 22 },
  titleMedium: { fontWeight: 500, fontSize: 16, lineHeight: 24 / 16 },
  titleSmall: { fontWeight: 500, fontSize: 14, lineHeight: 20 / 14 },

  labelLarge: { fontWeight: 500, fontSize: 14, lineHeight: 20 / 14 },
  labelMedium: { fontWeight: 500, fontSize: 12, lineHeight: 16 / 14 },
  labelSmall: { fontWeight: 500, fontSize: 10, lineHeight: 14 / 12 },

  bodyLarge: { fontWeight: 400, fontSize: 16, lineHeight: 24 / 16 },
  bodyMedium: { fontWeight: 400, fontSize: 14, lineHeight: 20 / 14 },
  bodySmall: { fontWeight: 400, fontSize: 12, lineHeight: 16 / 12 },
} as TypographyOptions

export type ITypographyVariants = keyof typeof variants

export const TypographyVariants = {
  fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
  ...variants,
} as TypographyOptions

const theme = {
  components: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h2',
        subtitle2: 'h3',
        body1: 'span',
        body2: 'span',
      },
    },
  },
} as ThemeOptions

export const TypographyComponent = theme.components
