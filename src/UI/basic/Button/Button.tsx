import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

export type IType = 'primary' | 'default' | 'warning' | 'danger';
export type ISpacing = 'default' | 'compact';

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
  onClick?: React.MouseEventHandler<HTMLElement>;
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
  font-family: ${(p) => p.theme.typography.font};

  &:disabled {
    background: ${(p) => p.theme.colors.N600};
  }

  &:hover {
    background: ${(p) => p.theme.colors.B100};
  }

  &:focus {
    outline: 2px solid ${(p) => p.theme.colors.B300};
  }

  &:active {
    background: ${(p) => p.theme.colors.B200};
  }
`;

const getText = (text: string, loading: boolean): string => {
  return loading ? 'Wait' : text;
};

const Button: React.FC<IProps> = ({
  type = 'default',
  spacing = 'default',
  text,
  visible = true,
  disabled = false,
  loading = false,
  onClick,
}) => (
  <>
    {visible && (
      <StyledButton
        appearance={type}
        spacing={spacing}
        disabled={disabled}
        onClick={!loading ? onClick : undefined}
      >
        {getText(text, loading)}
      </StyledButton>
    )}
  </>
);

Button.defaultProps = {
  disabled: false,
  visible: true,
  fluid: false,
  loading: false,
};

const MemedButton = React.memo(Button);

export { MemedButton as Button };
