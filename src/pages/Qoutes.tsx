/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useCallback } from 'react';

import { Button } from '../UI/basic/Button';
import { Icon } from '../UI/basic/Icons';

import { MainLayout } from '../components/Layouts/Main';
import MenuContainer from '../containers/MenuContainer';
import QuotesContainer from '../containers/QuotesContainer';
import { MainMenu } from '../components/Molecules/MainMenu';
import { CardsList } from '../components/Molecules/CardsList';

const AddStock = React.lazy(() => import('../modules/modals/AddStock'));

// path: /?modal=addStock
// { modal: ['addStock', 'changeStock'] }
const Create = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);


  const handleClick = useCallback(() => {
    setVisible(true);

  }, []);

  const handleSuccess = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Button
        type="primary"
        text="Add"
        onClick={handleClick}
        loading={loading}
      />

      {visible && (
        <React.Suspense fallback={'...Loading'}>
          <AddStock
            visible={visible}
            onSuccess={handleSuccess}
            onCancel={handleSuccess}
          />
        </React.Suspense>
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
