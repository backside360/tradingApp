import { DefaultTheme } from 'styled-components';
import { stat } from 'fs';

type ValueOf<T> = T[keyof T];

export const getBackgroundColor = (
  theme: DefaultTheme,
  state: { disabled: boolean; checked: boolean }
): ValueOf<DefaultTheme['colors']> => {
  if (state.disabled) {
    return theme.colors.N20;
  }
  if (state.checked) {
    return theme.colors.B400;
  }

  return theme.colors.W700;
};

export const getBorderColor = (
  theme: DefaultTheme,
  state: { disabled: boolean; checked: boolean; hover?: boolean; error: string }
): ValueOf<DefaultTheme['colors']> => {
  if (state.disabled || (state.hover && state.disabled)) {
    return theme.colors.N20;
  }

  if (state.error) {
    return theme.colors.R300;
  }
  if (state.checked || state.hover) {
    return theme.colors.B400;
  }

  return theme.colors.N40;
};
