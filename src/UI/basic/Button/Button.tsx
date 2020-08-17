import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { Loading } from '../Icons/index';

export type IType = 'primary' | 'default' | 'warning' | 'danger' | 'link';
export type ISpacing = 'default' | 'compact';

type IStyledProps = {
  appearance: IType;
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
  link: theme.colors.B400,
});

const getBackground = (theme: DefaultTheme) => ({
  primary: theme.colors.B400,
  default: theme.colors.N20,
  warning: theme.colors.Y300,
  danger: theme.colors.R400,
  link: 'transparent',
});

const StyledButton = styled.button<IStyledProps>`
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  background: ${(p) => getBackground(p.theme)[p.appearance]};
  border: 0;
  padding: 0;
  color: ${(p) => getColor(p.theme)[p.appearance]};
  font-family: ${(p) => p.theme.typography.font};
  transition: all 0.3s ease;

  &:disabled {
    background: ${(p) => p.theme.colors.N600};
  }

  &:hover {
    background: ${(p) =>
      p.appearance === 'link' ? 'transparent' : p.theme.colors.B100};
    color: ${(p) => (p.appearance === 'link' ? p.theme.colors.B100 : null)};
  }

  &:active {
    background: ${(p) =>
      p.appearance === 'link' ? 'transparent' : p.theme.colors.B200};
    color: ${(p) => (p.appearance === 'link' ? p.theme.colors.B500 : null)};
  }
`;

const TextWrapper = styled.span<{ spacing: ISpacing }>`
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  padding: 0 12px;
  height: ${(p) => (p.spacing === 'default' ? 32 : 24)}px;
`;

const Button: React.FC<IProps> = ({
  type = 'default',
  spacing = 'default',
  text,
  visible = true,
  disabled = false,
  loading = false,
  onClick,
}) => {
  return (
    <>
      {visible && (
        <StyledButton
          appearance={type}
          disabled={disabled}
          onClick={!loading ? onClick : undefined}
        >
          <TextWrapper tabIndex={-1} spacing={spacing}>
            {loading ? <Loading size={'small'} color="W700" /> : text}
          </TextWrapper>
        </StyledButton>
      )}
    </>
  );
};

Button.defaultProps = {
  disabled: false,
  visible: true,
  fluid: false,
  loading: false,
};

const MemedButton = React.memo(Button);

export { MemedButton as Button };
