import React from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface IProps {
  component: React.ElementType;
}

type IMatch = {
  menuId?: string;
};

const MenuContainer: React.FC<IProps> = ({ component: MenuComponent }) => {
  const {
    store: { Menu },
  } = useInjection();

  const history = useHistory();
  const match = useRouteMatch<IMatch>('/:menuId');

  React.useEffect(() => {
    Menu.addMenuItem({
      menuId: 'stock',
      title: 'Акции',
      disabled: false,
      role: 'user',
      routerId: null,
    });

    Menu.addMenuItem({
      menuId: 'novosti',
      title: 'Новости',
      disabled: false,
      role: 'user',
      routerId: 'news',
    });
  }, []); // eslint-disable-line

  const onSelect = React.useCallback(
    (menuId) => {
      history.push(`/${Menu.items[menuId].routerId}`);
    },
    [Menu, history]
  );

  const selectedMenuId = Object.values(Menu.items).find(
    (item) => item.routerId === (match?.params?.menuId || null)
  )?.menuId;

  return (
    <MenuComponent
      items={Menu.items}
      selectedKey={selectedMenuId}
      onSelect={onSelect}
    />
  );
};

export default observer(MenuContainer);
