import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Quotes = React.lazy(() => import('./Qoutes'));
const QuoteInfo = React.lazy(() => import('./QuoteInfo'));
const News = React.lazy(() => import('./News'));

const Main = () => (
        <React.Suspense fallback="...Loading">
          <Quotes />
        </React.Suspense>
      )

export const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Main}
    />
    <Route
      exact
      path="/stock/:id"
      component={QuoteInfo}
    />
    <Route
      exact
      path="/news"
      component={News}
    />
    <Redirect to="/" />
  </Switch>
);
