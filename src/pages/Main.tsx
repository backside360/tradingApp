/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// import { Button } from 'antd';

import { Button } from '../UI/basic/Button';
import { Icon } from '../UI/basic/Icons';

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
  const { search } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const params = new URLSearchParams(search);

  useEffect(() => {
    if (params.get('modal') === 'addStock') {
      // setVisible(true);
    }
  }, []); // eslint-disable-line

  const handleClick = useCallback(() => {
    setVisible(true);

    // push(`${pathname}?modal=addStock`);
  }, []);

  const handleSuccess = useCallback(() => {
    // goBack();
    setVisible(false);
  }, []);

  return (
    <>
      {/* <Button onClick={handleClick}>Add</Button> */}
      <Button
        type="primary"
        text="Add"
        onClick={handleClick}
        loading={loading}
      />
      <Button text="Add" />
      <Button type="danger" text="Add" spacing="compact" />
      <Button type="warning" text="Add" />
      <Icon />

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
