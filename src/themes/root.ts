import type { PaletteOptions, ThemeOptions } from '@mui/material'
import { ComponentOptions } from './components'
import { TypographyVariants } from './options'
import type { IThemeColor } from './options/colors'

export const RootThemes: ThemeOptions = {
  spacing: 1,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 834,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: TypographyVariants,
  components: ComponentOptions.components,
}

export const CustomTheme = (colors: IThemeColor, extra?: PaletteOptions): ThemeOptions => {
  return {
    palette: {
      ...extra,
      primary: {
        main: colors.white,
        contrastText: colors.black,
        dark: colors['gray-50'],
        light: colors['gray-50'],
      },

      secondary: {
        main: colors['gray-600'],
        contrastText: colors['gray-300'],
        dark: colors['gray-700'],
        light: colors['gray-700'],
      },

      success: {
        main: colors.success,
      },
      warning: {
        main: colors.warn,
      },
      error: {
        main: colors.error,
      },
    },
  }
}
