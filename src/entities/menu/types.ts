export interface IMenuItem {
  menuId: string;
  title: string;
  disabled: boolean;
  role: 'admin' | 'moderator' | 'user';
  menu?: IMenuItem;
}

export interface IMenu {
  [menuId: string]: IMenuItem;
}
