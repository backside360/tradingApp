import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const ArrowRight: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();

  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path
        d="M11.793 5.793a.999.999 0 0 0 0 1.414L15.586 11H6a1 1 0 0 0 0 2h9.586l-3.793 3.793a.999.999 0 0 0 0 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 0 0 .293-.679v-.057a.996.996 0 0 0-.293-.678l-5.499-5.5a1 1 0 0 0-1.415 0z"
        fill={colors[color]}
      />
    </svg>
  );
};
