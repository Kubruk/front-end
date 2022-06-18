import { SideBarItem } from './SideBarItem';

export class SideBarMenu {
  constructor(isLogged) {
    this.isLogged = isLogged;
  }

  getMenu() {
    const sideBar = [
      new SideBarItem('/', 'Home'),
      new SideBarItem('/about', 'Acerca de'),
      this.isLogged
        ? new SideBarItem('/logout', 'Logout')
        : new SideBarItem('/login', 'Login')
    ];

    return sideBar;
  }
}
