import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { EnvironmentContext } from '../contexts';
import api from '../api/browser';
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
    Menu: new Menu(),
  },
};

const Env: React.FC<TProps> = ({ component: Main }) => {
  return (
    <EnvironmentContext.Provider value={env}>
      <Router>
        <Main />
      </Router>
    </EnvironmentContext.Provider>
  );
};

export default Env;
