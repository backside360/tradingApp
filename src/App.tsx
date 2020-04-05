import React from 'react';
import QuotesContainer from './containers/QuotesContainer';
import MenuContainer from './containers/MenuContainer';
import { MainMenu } from './components/Molecules/MainMenu';
import { CardsList } from './components/Molecules/CardsList';
import { MainLayout } from './components/Layouts/Main';
import { RouterContainer } from './containers/RouterContainer';
import 'antd/dist/antd.css';

const App: React.FC = () => (
  <div className="main">
    <RouterContainer
      path="/"
      render={() => (
        <MainLayout
          header={() => <MenuContainer component={MainMenu} />}
          body={() => <QuotesContainer component={CardsList} />}
        />
      )}
    />
  </div>
);

export default App;
