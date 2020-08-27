import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { Check } from '../Icons/index';
import { getBackgroundColor, getBorderColor } from './utils/getColor';

type IProps = {
  disabled?: boolean;
  visible?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  label: string;
  checked: boolean;
  error?: boolean;
  required?: boolean;
  tabIndex?: number;
};

const LabelWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.div<{
  disabled: boolean;
  checked: boolean;
  error?: boolean;
}>`
  box-sizing: border-box;
  margin: 6px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${(p) =>
    getBackgroundColor(p.theme, {
      disabled: p.disabled,
      checked: p.checked,
    })};
  border: 2px solid
    ${(p) =>
      getBorderColor(p.theme, {
        disabled: p.disabled,
        checked: p.checked,
        error: p.error ?? false,
      })};
  padding: 0;
  transition: all 0.2s ease-in-out 0s;
  height: 12px;
  width: 12px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<{
  disabled: boolean;
  checked: boolean;
  error?: boolean;
  hover?: boolean;
}>`
  position: absolute;
  opacity: 0;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &:focus + ${LabelWraper} ${StyledCheckbox} {
    border: 2px solid
      ${(p) =>
        getBorderColor(p.theme, {
          disabled: p.disabled,
          checked: p.checked,
          error: p.error ?? false,
          hover: true,
        })};
  }
`;

const StyledLabel = styled.label<{
  disabled: boolean;
  checked: boolean;
  error?: boolean;
  hover?: boolean;
}>`
  width: 100%;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  &:hover ${StyledCheckbox} {
    border: 2px solid
      ${(p) =>
        getBorderColor(p.theme, {
          disabled: p.disabled,
          checked: p.checked,
          error: p.error ?? false,
          hover: true,
        })};
  }
`;

const Label = styled.div<{ disabled: boolean }>`
  padding: 0 4px;
  font-size: 14px;
  font-family: ${(p) => p.theme.typography.font};
  color: ${(p) => (p.disabled ? p.theme.colors.N80 : p.theme.colors.N900)};
`;

const RequiredLabel = styled.span`
  color: ${(p) => p.theme.colors.R500};
`;

export const Checkbox: React.FC<IProps> = ({
  onClick,
  label,
  checked = false,
  disabled = false,
  visible = true,
  error,
  required,
  tabIndex = 0,
}) =>
  visible ? (
    <StyledLabel disabled={disabled} error={error} checked={checked}>
      <HiddenCheckbox
        tabIndex={tabIndex}
        checked={checked}
        disabled={disabled}
        onClick={onClick}
      />
      <LabelWraper>
        <StyledCheckbox checked={checked} error={error} disabled={disabled}>
          {checked ? (
            <Check size="small" color={disabled ? 'N600' : 'W700'} />
          ) : null}
        </StyledCheckbox>
        <Label disabled={disabled}>
          {label}
          {required ? <RequiredLabel>*</RequiredLabel> : null}
        </Label>
      </LabelWraper>
    </StyledLabel>
  ) : null;
