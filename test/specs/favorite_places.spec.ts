import FavoritePlaces from "../pageobjects/favorite_places.ts";
describe("test Navigation Bar", () => {
  it("navigation bar", async () => {
    await FavoritePlaces.open();
    await expect(FavoritePlaces.header).toBeDisplayed()
    await expect(FavoritePlaces.logo).toBeDisplayed()
    await expect(FavoritePlaces.headerActive).toBeDisplayed()
    await expect(FavoritePlaces.headerActive).toHaveText("Favorite places")

  });

});


describe("checkboxes", () => {
  it("all cards are visible", async () => {
    await FavoritePlaces.open();
    await expect(FavoritePlaces.card("Forest", "h5")).toBeDisplayed();
    await expect(FavoritePlaces.card("Mountains", "h5")).toBeDisplayed();
    await expect(FavoritePlaces.card("Road", "h5")).toBeDisplayed();
    await expect(FavoritePlaces.card("Ocean", "h5")).toBeDisplayed();
    // await expect(HomePage.logo).toBeDisplayed()
    //await expect(HomePage.navBrowser).toBeDisplayed()
  });
});

// for []

//раздеить спеки на кажду карточку it("card Forest should be visible", async () => {
     
/*
describe("checkboxes", () => {
  it("checkbox 2 should be enabled", async () => {
    await HomePage.open();
    // await expect(HomePage.logo).toBeDisplayed()
    //await expect(HomePage.navBrowser).toBeDisplayed()
  });
});
// это дескрайб ЗДЕСЬ должен тестировать чтобы хэдер был виден
*/