import React from 'react';
import { TIcon } from '../types';
import { useTheme } from 'styled-components';
import { getSize } from '../utils/getSize';

export const Check: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();
  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path
        d="M6.735 12.322a1 1 0 0 0-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 0 0 3.939-3.883l.04-.04a492.598 492.598 0 0 0 3.658-3.643 1 1 0 0 0-1.424-1.404 518.42 518.42 0 0 1-3.64 3.625l-.04.04a2049.114 2049.114 0 0 1-3.775 3.722l-3.098-3.363z"
        fill={colors[color]}
      />
    </svg>
  );
};
