import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

type IType = 'primary' | 'default' | 'warning' | 'danger';
type ISpacing = 'default' | 'compact';

type IStyledProps = {
  appearance: IType;
  spacing: ISpacing;
};

type IProps = {
  type?: IType;
  disabled?: boolean;
  visible?: boolean;
  spacing?: ISpacing;
  fluid?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  text: string;
  loading?: boolean;
};

const getColor = (theme: DefaultTheme) => ({
  primary: theme.colors.W700,
  default: theme.colors.N500,
  warning: theme.colors.N800,
  danger: theme.colors.W700,
});

const getBackground = (theme: DefaultTheme) => ({
  primary: theme.colors.B400,
  default: theme.colors.N20,
  warning: theme.colors.Y300,
  danger: theme.colors.R400,
});

const StyledButton = styled.button<IStyledProps>`
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0 12px;
  cursor: pointer;
  background: ${(p) => getBackground(p.theme)[p.appearance]};
  outline: none;
  border: 0;
  color: ${(p) => getColor(p.theme)[p.appearance]};
  min-width: 70px;
  height: ${(p) => (p.spacing === 'default' ? 32 : 24)}px;
`;

const Button: React.FC<IProps> = ({
  type = 'default',
  spacing = 'default',
  text,
}) => (
  <StyledButton appearance={type} spacing={spacing}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  disabled: false,
  visible: true,
  fluid: false,
};

const MemedButton = React.memo(Button);

export { MemedButton as Button };
