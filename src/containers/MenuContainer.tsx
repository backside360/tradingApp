import React from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';

interface IProps {
  component: React.ElementType;
}

const MenuContainer: React.FC<IProps> = ({ component: MenuComponent }) => {
  const {
    store: { Menu },
    router: { navigate, getState },
  } = useInjection();

  React.useEffect(() => {
    Menu.addMenuItem({
      menuId: 'stock',
      title: 'Акции',
      disabled: false,
      role: 'user',
      routerId: '/',
    });

    Menu.addMenuItem({
      menuId: 'news',
      title: 'Новости',
      disabled: false,
      role: 'user',
      routerId: '/news',
    });

    Menu.selectMenu('stock');
  }, []);

  const onSelect = React.useCallback(
    (menuId) => {
      Menu.selectMenu(menuId);
      navigate(Menu.items[menuId].routerId);
    },
    [Menu, navigate]
  );

  

  return (
    <MenuComponent
      items={Menu.items}
      selectedKey={Menu.selectedMenuId}
      onSelect={onSelect}
    />
  );
};

export default observer(MenuContainer);
