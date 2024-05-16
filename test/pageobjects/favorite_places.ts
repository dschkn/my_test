import Page from './page.ts'

class FavoritePlacesPage extends Page {
    //get youtube () { return $('a[tittle="YouTube"]') }

    card (content: string, h: string) { 
        return $(`//div[@class="card"][.//${h}[contains(text(),"${content}")]]`) 
    }
    /**функция card ожидает параметр "контент" в виде СТРОКИ, Он использует шаблонную строку 
    для создания XPath-запроса, который ищет элемент с классом "card" и содержащий заголовок <h5>, 
    содержащий текст, переданный в переменной content.
    //div[@class="card"] - обращаемся к АТРИБУТУ класс кард через @ 

    /**
     * define or overwrite page methods
     */
    // get navBar (content: string) { return $(`//nav[@class=""navbar navbar-expand-lg navbar-dark bg-dark""][.//h5[contains(img(),"${content}")]]`) } //?????

    async open() {
        return super.open('places.html')
    }
}

export default new FavoritePlacesPage()
