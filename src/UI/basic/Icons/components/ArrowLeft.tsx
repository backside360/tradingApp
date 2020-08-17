import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const ArrowLeft: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();
  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path
        d="M11 6v9.586l-3.793-3.793a.999.999 0 0 0-1.414 0c-.39.39-.39 1.024 0 1.415l5.5 5.499A.993.993 0 0 0 12 19a.993.993 0 0 0 .707-.293l5.5-5.499a1 1 0 1 0-1.414-1.415L13 15.586V6a1 1 0 0 0-2 0z"
        fill={colors[color]}
      />
    </svg>
  );
};
