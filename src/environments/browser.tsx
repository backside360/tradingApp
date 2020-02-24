import React, { useState, useEffect } from 'react';
import { EnvironmentContext } from '../contexts';
import api from '../api/browser';
import QuoteStore from '../entities/quotes/Quotes/browser';
import { setTimeout } from '../timers';
import { TENV } from '../interface';

type TProps = {
  component: React.ElementType;
};

const env: TENV = {
  api,
  setTimeout,
  store: {
    QuoteStore: new QuoteStore()
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
