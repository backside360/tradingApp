import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const Radio: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();
  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <g fill-rule="evenodd">
        <circle fill={colors[color]} cx="12" cy="12" r="6" />
        <circle fill={colors[color]} cx="12" cy="12" r="2" />
      </g>
    </svg>
  );
};
