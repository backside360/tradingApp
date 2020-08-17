import React from 'react';
import { TIcon } from '../types';
import { useTheme } from 'styled-components';
import { getSize } from '../utils/getSize';

export const AddCircle: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();

  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        d="M11.046 7.958v3.088H7.958a.954.954 0 1 0 0 1.908h3.088v3.088a.954.954 0 1 0 1.908 0v-3.088h3.088a.954.954 0 1 0 0-1.908h-3.088V7.958a.954.954 0 1 0-1.908 0z"
        fill={colors[color]}
      />
    </svg>
  );
};
