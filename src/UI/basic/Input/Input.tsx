import React from 'react';
import styled, { css } from 'styled-components';
import { TIcon } from '../Icons/types';
import { H5 } from '../Typography/index';

type IProps = {
  disabled?: boolean;
  visible?: boolean;
  compact?: boolean;
  onChange?: React.KeyboardEventHandler<HTMLElement>;
  onFocus?: React.MouseEventHandler<HTMLElement>;
  onBlur?: React.MouseEventHandler<HTMLElement>;
  onIconClick?: React.MouseEventHandler<SVGSVGElement>;
  value: string;
  error?: string;
  label?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  required?: boolean;
  icon?: React.FC<TIcon>;
  tabIndex?: number;
};

const StyledInput = styled.input<any>`
  color: ${(p) => p.theme.colors.N800};
  height: 100%;
  transition: border 0.3s ease;
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  cursor: inherit;
`;

const InputWrapper = styled.div<any>`
  height: ${(p) => (p.compact ? 32 : 40)}px;
  border: 2px solid ${(p) => p.theme.colors.N40};
  border-radius: 3px;
  background: ${(p) => p.theme.colors.W700};
  padding: 6px;
  display: flex;
  align-items: center;
  cursor: text;
  transition: border 0.3s ease;
  &:hover {
    border: 2px solid
      ${(p) => (p.disabled ? p.theme.colors.N30 : p.focused ? p.theme.colors.B400 : p.theme.colors.B300)};
  }

  ${(p) =>
    p.disabled
      ? css`
          background: ${p.theme.colors.N10};
          border: 2px solid ${p.theme.colors.N30};
          cursor: not-allowed;
        `
      : null};

  ${(p) =>
    p.readOnly
      ? css`
          background: ${p.theme.colors.N10};
          border: 2px solid ${p.theme.colors.N30};
        `
      : null};

  ${(p) =>
    p.error
      ? css`
          border: 2px solid ${p.theme.colors.R300};
        `
      : null};
  
  ${(p) =>
    p.focused
      ? css`
        border: 2px solid ${p.theme.colors.B400};
      ` : null};
`;

const RequiredLabel = styled.span`
  color: ${(p) => p.theme.colors.R500};
`;

export const Input: React.FC<IProps> = ({
  disabled,
  value,
  visible = true,
  onChange,
  onBlur,
  onFocus,
  onIconClick,
  compact = false,
  autoFocus,
  readOnly,
  placeholder,
  required,
  label,
  icon: Icon,
  tabIndex = 0,
  error,
}) => {
  const [focused, setFocused] = React.useState<boolean>(autoFocus || false);

  const handleFocus = (e: React.MouseEvent<HTMLElement>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.MouseEvent<HTMLElement>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  return visible ? (
    <label>
      <H5>
        {label}
        {required ? <RequiredLabel>*</RequiredLabel> : null}
      </H5>
      <InputWrapper disabled={disabled} compact={compact} error={error} focused={focused}>
        <StyledInput
          type="text"
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoFocus={autoFocus}
          readOnly={readOnly}
          placeholder={placeholder}
          required={required}
          tabIndex={tabIndex}
        />
        {Icon ? (
          <Icon
            size="medium"
            color={disabled ? 'N40' : 'B400'}
            onClick={onIconClick}
          />
        ) : null}
      </InputWrapper>
    </label>
  ) : null;
}