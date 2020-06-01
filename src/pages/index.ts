import React from 'react';

export const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./Main')),
  },
  {
    path: '/stock/:id',
    component: React.lazy(() => import('./QuoteInfo')),
  },
  {
    path: '/news',
    component: React.lazy(() => import('./News')),
  },
];
