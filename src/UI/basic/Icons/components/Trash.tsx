import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const Trash: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();
  return (
    <svg width={getSize(size)} height={getSize(size)} viewBox="0 0 24 24">
      <path
        d="M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zm11.15 15H7.845a1 1 0 0 1-.986-.835L5 8h14l-1.864 11.166a.999.999 0 0 1-.986.834M9 4.5a.5.5 0 0 1 .491-.5h5.018a.5.5 0 0 1 .491.5V5H9v-.5z"
        fill={colors[color]}
        fill-rule="evenodd"
      />
    </svg>
  );
};
