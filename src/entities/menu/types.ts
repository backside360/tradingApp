export interface IMenuItem {
  menuId: string;
  title: string;
  disabled: boolean;
  role: 'admin' | 'moderator' | 'user';
  menu?: IMenuItem;
  routerId: string;
}

export interface IMenu {
  [menuId: string]: IMenuItem;
}
