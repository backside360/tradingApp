import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const Search: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();
  return (
    <svg width={getSize(size)} height={getSize(size)} viewBox="0 0 24 24">
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill={colors[color]}
        fill-rule="evenodd"
      />
    </svg>
  );
};
