import React, { useState, useEffect } from 'react';
import { ApiContext } from '../contexts';

type TProps = {
  component: React.ElementType;
};

// вынести src/api/mock.js
const api = {
  quotes: {
    getQuote: () => Promise.resolve({ symbol: 'APPL' })
  }
};
// выносить только то что выше

const Env: React.FC<TProps> = ({ component: Main }) => {
  return (
    <ApiContext.Provider value={api}>
      <Main />
    </ApiContext.Provider>
  );
};

export default Env;
