export const DarkColor = {
  white: '#F7FBFD',
  black: '#080808',
  primary: '#18E16A',
  success: '#18E16A',
  warn: '#EBBC42',
  error: '#860E0E',

  // Custom colos
  // tips: 'rgba(75, 62, 28, 0.7)',

  // Gray Colors
  'gray-900': '#191C1C',
  'gray-800': '#2E3131',
  'gray-700': '#444747',
  'gray-600': '#5B5F5F',
  'gray-500': '#737878',
  'gray-400': '#8D9191',
  'gray-300': '#A7ACAC',
  'gray-200': '#C2C7C7',
  'gray-100': '#DDE3E3',
  'gray-50': '#ECF1F1',

  // Primary
  'primary-900': '#052E15',
  'primary-800': '#0A5C2B',
  'primary-700': '#0E863E',
  'primary-600': '#13B453',
  'primary-500': '#18E16A',
  'primary-400': '#42EB86',
  'primary-300': '#70F0A3',
  'primary-200': '#A3F5C4',
  'primary-100': '#D1FAE1',
  'primary-50': '#E8FDF0',

  // Yellow
  'yellow-900': '#2E2305',
  'yellow-800': '#5C450A',
  'yellow-700': '#86640E',
  'yellow-600': '#B48713',
  'yellow-500': '#E1A918',
  'yellow-400': '#EBBC42',
  'yellow-300': '#F0CC70',
  'yellow-200': '#F5E3A3',
  'yellow-100': '#FAF1D1',
  'yellow-50': '#FDF8E8',

  // Red
  'red-900': '#2E0505',
  'red-800': '#5C0A0A',
  'red-700': '#860E0E',
  'red-600': '#B41313',
  'red-500': '#E11818',
  'red-400': '#EB4242',
  'red-300': '#F07070',
  'red-200': '#F5A3A3',
  'red-100': '#FAD1D1',
  'red-50': '#FDE8E8',
}

// TODO
export const LightColor = DarkColor

export type IThemeColor = typeof DarkColor & typeof LightColor

export default {
  light: LightColor,
  dark: DarkColor,
}
