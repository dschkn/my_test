import Page from "./page.ts";

class HomePage extends Page {
  get youtube() {
    return $('a[tittle="YouTube"]');
  }
  button(content: string) {
    return $(`//a[@class="btn btn-warning"][contains(text(),"${content}")]`);
  }
  get mainImage() {
    return $("#main-image");
  }
  get mainText() {
    return $("div[class='container text-center my-5']").$("h1"); //заменяет xpath
  }
  get secondaryText() {
    return $("div[class='container text-center my-5']").$("p");
  }
  //$x('//div[@class="card"][.//h5[contains(text(),"Ocean")]]')
  //таким образом я получу карточку океан
  // get card (content: string) { return $(`//div[@class="card"][.//h5[contains(text(),"${content}")]]`) }
  /**функция get card ожидает параметр "контент" в виде СТРОКИ, Он использует шаблонную строку 
    для создания XPath-запроса, который ищет элемент с классом "card" и содержащий заголовок <h5>, 
    содержащий текст, переданный в переменной content.
    //div[@class="card"] - обращаемся к АТРИБУТУ класс кард через @ 

    /**
     * define or overwrite page methods
     */
  // get navBar (content: string) { return $(`//nav[@class=""navbar navbar-expand-lg navbar-dark bg-dark""][.//h5[contains(img(),"${content}")]]`) } //?????

  async open() {
    return super.open("");
  }
}

export default new HomePage();

// добвить все элементы хоум пейджа
