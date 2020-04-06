import React from 'react';
import { observer } from 'mobx-react';
import { useInjection } from '../services/Injection';
import { toJS } from 'mobx';

interface IProps {
  component: React.ElementType;
}

const MenuContainer: React.FC<IProps> = ({ component: MenuComponent }) => {
  const {
    store: { Menu },
    router: { navigate, getState }
  } = useInjection();

  React.useEffect(() => {
    Menu.addMenuItem({
      menuId: '/',
      title: 'Акции',
      disabled: false,
      role: 'user'
    });

    Menu.addMenuItem({
      menuId: '/news',
      title: 'Новости',
      disabled: false,
      role: 'user'
    });
  });

  /**
   * Здесь надо уведомить комоненты об изменении роута
   */
  const onSelect = React.useCallback(menu => {
    navigate(menu);
  }, []);

  const routerState = getState();

  const findedMenu = Object.values(Menu.items).find(
    menu => menu.menuId === routerState.path
  );

  return (
    <MenuComponent
      items={Menu.items}
      selectedKey={findedMenu?.menuId}
      onSelect={onSelect}
    />
  );
};

export default observer(MenuContainer);
