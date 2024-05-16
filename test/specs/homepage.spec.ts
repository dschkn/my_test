import HomePage from "../pageobjects/homepage.js";
describe("test Navigation Bar", () => {
  it("test Navigation Bar", async () => {
    await HomePage.open();
    await expect(HomePage.header).toBeDisplayed();
    await expect(HomePage.logo).toBeDisplayed();
    await expect(HomePage.headerActive).toBeDisplayed();
    await expect(HomePage.headerActive).toHaveText("Home");
    await expect(HomePage.headerPassive).toBeDisplayed();
    await expect(HomePage.headerPassive).toHaveText("Favorite places");
  });
});
describe("test Page Content", () => {
  it("test Page Content", async () => {
    await HomePage.open();
    await expect(HomePage.mainImage).toBeDisplayed();
    await expect(HomePage.mainText).toBeDisplayed(); //что отображается
    await expect(HomePage.mainText).toHaveText("Dmitrii Shchukin"); // что есть текст конкретный
        
    await expect(HomePage.secondaryText).toBeDisplayed();
    await expect(HomePage.secondaryText).toHaveText("I am here to have some fun.");
  });
});
