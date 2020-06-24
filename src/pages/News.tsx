import React from 'react';
import MenuContainer from '../containers/MenuContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import { MainLayout } from '../components/Layouts/Main';

interface TProps {
  component: React.ElementType<any>;
  id: string;
}

const News: React.FC<TProps> = (props) => {

  const NewsCard = () => <h1>News</h1>;

  return (
    <MainLayout
      header={() => <MenuContainer component={MainMenu} />}
      body={NewsCard}
    />
  );
};

export default News;
