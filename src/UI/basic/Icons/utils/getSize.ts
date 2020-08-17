import { TSize } from '../types';

const sizes = { xlarge: 48, large: 32, medium: 24, small: 16 };

export const getSize = (size: TSize = 'small'): number => sizes[size];
