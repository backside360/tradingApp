import React, { useState, useEffect } from 'react';
import { ApiContext } from '../contexts';
import api from '../api/api';

type TProps = {
  component: React.ElementType;
};

const Env: React.FC<TProps> = ({ component: Main }) => {
  return (
    <ApiContext.Provider value={api}>
      <Main />
    </ApiContext.Provider>
  );
};

export default Env;
