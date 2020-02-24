import React, { useState, useEffect } from 'react';
import { EnvironmentContext } from '../contexts';
import api from '../api/test';

type TProps = {
  component: React.ElementType;
};

const Env: React.FC<TProps> = ({ component: Main }) => {
  return (
    <EnvironmentContext.Provider value={api}>
      <Main />
    </EnvironmentContext.Provider>
  );
};

export default Env;
