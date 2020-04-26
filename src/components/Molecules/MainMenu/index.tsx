import React from 'react';
import { Menu } from 'antd';
import { IMenu } from '../../../entities/menu/types';

interface IProps {
  items: IMenu;
  onSelect: (menuId: string) => void;
  selectedKey: string;
}

export const MainMenu: React.FC<IProps> = ({
  items,
  onSelect,
  selectedKey,
}) => {
  const handleClick = React.useCallback((e) => onSelect(e.key), [onSelect]);

  return Object.keys(items).length > 0 ? (
    <Menu mode="horizontal" onClick={handleClick} selectedKeys={[selectedKey]}>
      <Menu.Item key={items.stock.menuId} disabled={items.stock.disabled}>
        {items.stock.title}
      </Menu.Item>
      <Menu.Item key={items.news.menuId} disabled={items.news.disabled}>
        {items.news.title}
      </Menu.Item>
    </Menu>
  ) : null;
};
