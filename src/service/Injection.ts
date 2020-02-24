import { useContext } from 'react';

import { TENV } from '../interface';
import { EnvironmentContext } from '../contexts';

export const useInjection = (): TENV => {
  return useContext<TENV>(EnvironmentContext);
};
