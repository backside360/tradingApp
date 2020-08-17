import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
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
`;

const InputWrapper = styled.div<any>`
  height: ${(p) => (p.compact ? 32 : 40)}px;
  border: 2px solid ${(p) => p.theme.colors.N40};
  border-radius: 3px;
  background: ${(p) => p.theme.colors.W700};
  padding: 6px;
  display: flex;
  align-items: center;
  &:hover {
    border: 2px solid
      ${(p) => (p.disabled ? p.theme.colors.N30 : p.theme.colors.B400)};
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
          border: 1px solid ${p.theme.colors.N30};
        `
      : null};
`;

// <Input icon={AddCircle} onIconClick={() => setValue('')} />

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
}) =>
  visible ? (
    <label>
      <H5>{label}</H5>
      <InputWrapper disabled={disabled}>
        <StyledInput
          type="text"
          compact={compact}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
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
