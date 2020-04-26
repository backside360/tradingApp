import { observable } from 'mobx';
import { IMenu, IMenuItem } from './types';

export class Menu {
  @observable items: IMenu = {};
  @observable selectedMenuId: string = '';

  addMenuItem = (item: IMenuItem) => {
    this.items[item.menuId] = item;
  };

  changeMenuItem = (menuId: string, item: Partial<IMenuItem>) => {
    this.items[menuId] = { ...this.items[menuId], ...item };
  };

  selectMenu = (menuId: string) => {
    this.selectedMenuId = menuId;
  };
}
