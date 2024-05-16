export default class Page {
  open(path: string) {
    return browser.url(path);
  }
  check() {
    return 1;
  }
  get headerActive() {
    return this.header.$(".nav-link.active") //return возвращает header среди Page и найди компонент navbar-nav
  }
  get headerPassive() {
    return this.header.$(".nav-link") 
  }
  get logo() {
    return $("#logo");
  }
  get header() {
    return $("#navbarNav");
  }
}

//добавить хэдер навбар
