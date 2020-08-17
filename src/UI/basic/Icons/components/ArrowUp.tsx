import React from 'react';
import { TIcon } from '../types';
import { getSize } from '../utils/getSize';
import { useTheme } from 'styled-components';

export const ArrowUp: React.FC<TIcon> = ({ size, color, onClick }) => {
  const { colors } = useTheme();

  return (
    <svg
      width={getSize(size)}
      height={getSize(size)}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path
        d="M11.293 5.293l-5.5 5.499a1.002 1.002 0 0 0 0 1.415.999.999 0 0 0 1.414 0L11 8.414V18a1 1 0 0 0 2 0V8.414l3.793 3.793a1 1 0 1 0 1.414-1.415l-5.5-5.499A.993.993 0 0 0 12 5a.993.993 0 0 0-.707.293z"
        fill={colors[color]}
      />
    </svg>
  );
};
