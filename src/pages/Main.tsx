/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { ButtonStyled } from '../components/Atoms/Button';

import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import QuotesContainer from '../containers/QuotesContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import { CardsList } from '../components/Molecules/CardsList';
import { AsyncComponent } from '../containers/AsyncComponent';
import ThemeProvider from 'styled-components';

const AddStock = React.lazy(() => import('../modules/modals/AddStock'));

// path: /?modal=addStock
// { modal: ['addStock', 'changeStock'] }
const Create = () => {
  const { search, pathname } = useLocation();
  const { push, goBack } = useHistory();
  const [visible, setVisible] = useState<boolean>(false);

  const params = new URLSearchParams(search);

  useEffect(() => {
    if (params.get('modal') === 'addStock') {
      setVisible(true);
    }
  }, []);

  const handleClick = useCallback(() => {
    setVisible(true);
    push(`${pathname}?modal=addStock`);
  }, []);

  const handleSuccess = useCallback(() => {
    goBack();
    setVisible(false);
  }, []);

  const theme = {
    main: '#000',
  };

  return (
    <>
      <ButtonStyled onClick={handleClick}>ADD</ButtonStyled>

      {visible && (
        <AsyncComponent
          component={AddStock}
          visible={visible}
          onSuccess={handleSuccess}
          onCancel={handleSuccess}
        />
      )}
    </>
  );
};

const Mainpage: React.FC = () => (
  <MainLayout
    header={() => <MenuContainer component={MainMenu} />}
    body={() => (
      <>
        <Create />
        <QuotesContainer component={CardsList} />
      </>
    )}
  />
);

export default Mainpage;
