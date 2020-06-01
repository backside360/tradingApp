import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import { AsyncComponent } from './containers/AsyncComponent';
import { routes } from './pages';

const App: React.FC = () => (
  <div className="main">
    <Switch>
      {routes.map(({ path, component }) => (
        <Route
          exact
          path={path}
          // @ts-ignore
          render={(props) => (
            <AsyncComponent component={component} {...props.match.params} />
          )}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
