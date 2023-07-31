import type { ThemeOptions } from '@mui/material'

const theme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
        sizeSmall: {
          height: 28,
          fontSize: 12,
          borderRadius: 4,
          padding: '6px 12px',
        },
        sizeMedium: {
          height: 36,
          fontSize: 14,
          borderRadius: 4,
          padding: '8px 16px',
        },
        sizeLarge: {
          height: 44,
          fontSize: 16,
          borderRadius: 4,
          padding: '10px 20px',
        },
      },
    },
  },
} as ThemeOptions

export const ButtonComponent = theme.components
