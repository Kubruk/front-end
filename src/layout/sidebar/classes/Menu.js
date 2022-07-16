class Menu {
  constructor({ isLogged, user }) {
    this.isLogged = isLogged;
    this.user = user;
  }

  getLoggedLinks() {
    return [{ to: `/user/${this.user.uid}/bruks`, name: 'menu.test' }];
  }

  build() {
    return [
      { to: '/', name: 'menu.dashboard' },
      ...(this.isLogged ? this.getLoggedLinks() : [])
    ];
  }
}

export default Menu;
