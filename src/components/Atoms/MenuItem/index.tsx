import React from 'react';
import { Menu } from 'antd';

import { IMenuItem } from '../../../entities/menu/types';

export const MenuItem: React.FC<IMenuItem> = ({ title, menuId, disabled }) => {
  return (
    <Menu.Item key={menuId} disabled={disabled}>
      {title}
    </Menu.Item>
  );
};
