import React from 'react';
import { EnvironmentContext } from '../contexts';
import api from '../api/test';
import { Quotes } from '../entities/quotes';
import { Menu } from '../entities/menu';
import { TENV } from '../interface';

type TProps = {
  component: React.ElementType;
};

const env: TENV = {
  api,
  store: {
    Quotes,
    Menu: new Menu()
  }
};

const Env: React.FC<TProps> = ({ component: Main }) => {
  return (
    <EnvironmentContext.Provider value={env}>
      <Main />
    </EnvironmentContext.Provider>
  );
};

export default Env;
