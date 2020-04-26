import React from 'react';
import QuotesContainer from './containers/QuotesContainer';
import MenuContainer from './containers/MenuContainer';
import { MainMenu } from './components/Molecules/MainMenu';
import { CardsList } from './components/Molecules/CardsList';
import { MainLayout } from './components/Layouts/Main';
import { RouterContainer } from './containers/RouterContainer';
import 'antd/dist/antd.css';

interface IStock {
  id: string;
}

const App: React.FC = () => (
  <div className="main">
    <MainLayout
      header={() => <MenuContainer component={MainMenu} />}
      body={() => (
        <>
          <RouterContainer
            path="/"
            render={() => <QuotesContainer component={CardsList} />}
          />
          <RouterContainer<IStock>
            path="/stock/:id"
            render={({ id }) => <>stock: {id}</>}
          />
          // /news // /news/123123
          <RouterContainer
            path="/news/:id?"
            render={({ id }) => <> {id ? `News: ${id}` : `News not found`} </>}
          />
        </>
      )}
    />
  </div>
);

export default App;
