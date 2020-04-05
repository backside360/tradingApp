import React from 'react';
import { Menu } from 'antd';
import { useInjection } from '../../../services/Injection';

import { IMenuItem } from '../../../entities/menu/types';

export const MenuItem: React.FC<IMenuItem> = ({ title, menuId, disabled }) => {
  const { router } = useInjection();
  return (
    <Menu.Item key={menuId} disabled={disabled}>
      {title}
    </Menu.Item>
  );
};
