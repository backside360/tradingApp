import React from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

type IProps = {
  items: Array<IItem>;
  selected?: string;
  onSelect?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  visible?: boolean;
  required?: boolean;
  tabIndex?: number;
  error?: boolean;
};

interface IItem {
  id: string;
  value: string;
}

const StyledLabel = styled.label`
  display: block;
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })<{
  disabled?: boolean;
  checked: boolean;
  error?: boolean;
}>`
  box-sizing: border-box;
  margin: 6px;
  display: inline-flex;
  align-items: center;
  border-radius: 2px;
  padding: 0;
  transition: all 0.2s ease-in-out 0s;
  height: 12px;
  width: 12px;
  &:checked {
    background: #db7290;
    border: 1px solid #db7290;
    z-index: 3;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
  &:disabled {
    cursor: not-allowed;
    background: ${(p) => p.theme.colors.N10};
  }
`;

const LabelText = styled.span`
  color: #000;
  align-self: center;
`;

export const Radio: React.FC<IProps> = ({
  onSelect,
  disabled = false,
  visible = true,
  items,
  selected,
  required,
  tabIndex = 0,
  error = false,
}) =>
  visible ? (
    <>
      {items.map((item) => (
        <StyledLabel>
          <StyledRadio
            checked={item.id === selected}
            onClick={onSelect}
            value={item.id}
            disabled={disabled}
            required={required}
            tabIndex={tabIndex}
            error={error}
          />
          <LabelText>{item.value}</LabelText>
        </StyledLabel>
      ))}
    </>
  ) : null;
