// theme.js
import { DefaultTheme } from '@react-navigation/native';
import { COLORS } from './styles';

export const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.appBg,
  },
};
