import React from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';

interface IProps {
  path: string;
  render: () => React.ReactNode;
}

export const RouterContainer: React.FC<IProps> = ({ path, render }) => {
  const { router } = useInjection();

  const state = router.getState();
  console.log('test');

  return state.path === path ? <>{render()}</> : null;
};
