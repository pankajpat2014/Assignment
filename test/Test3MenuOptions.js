const { assert } = require('chai');
const MenuOptionsPage = require('../Pages/PageMenuOptions')
const SafteyPage = require('../Pages/PageVovloSafteyCampaign')
const DataMenuOptions = require('../testData/DataMenuOptions')
const DatatPageTitles = require('../testData/DataPageTitles')

describe("Test menu options", function()
{
    it("Verify Menu options", function()
    {
      //Step1: Navigate to Volvo seat belt saftey campaign page and verify the title
        SafteyPage.navigatenToSafteyCampaignPage()
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

      //Step2: Accept Cookies
        SafteyPage.acceptCookiesIfPresent()

      //Step3: Click on Hamburger icon and verify the options
        MenuOptionsPage.navigatToMenu();
        var options = MenuOptionsPage.menuOptionsText();
        var i=0;
          options.forEach(element => {
              expect(DataMenuOptions.expectedMenuOptions[i]).to.be.equal(element);
              i=i+1;
      });
    });
    
    it("Verify sub -menu from Buy menu option", function()
    {
        //Step1: verify page title
          expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Step2: Click on Buy subMenu and verify the options
          MenuOptionsPage.navigatToBuyMenuOption();
          var options = MenuOptionsPage.menuBuySubMenuOptionsText();
          var i=0;
            options.forEach(element => {
                expect(DataMenuOptions.expectedBuySubMenuOptions[i]).to.be.equal(element);
                i=i+1;
        });
    });
});
