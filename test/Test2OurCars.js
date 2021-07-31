const PageOurCars = require('../Pages/PageOurCars')
const DataOurCars = require('../testData/DataOurCars')
const SafteyPage = require('../Pages/PageVovloSafteyCampaign')
const DatatPageTitles = require('../testData/DataPageTitles')
const MenuOptionsPage = require('../Pages/PageMenuOptions')

describe("Test Our Cars section", function()
{
    it("Verify Electric car category and sub categories under it", function()
    {
        //Step1: Navigate to Volvo seat belt saftey campaign page and verify the title
        SafteyPage.navigatenToSafteyCampaignPage()
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Step2: Accept Cookies
        SafteyPage.acceptCookiesIfPresent()

        //Step3: Navigate to Our Cars option
        PageOurCars.navigatToOurCars();

        //Step4: Validate Electric car section heading and subheading
        PageOurCars.clickOnElectricCars();
        expect(DataOurCars.electricCarSectionButtonHeading).to.be.equal(PageOurCars.getTextElectricCarSectionButtonHeading);
        expect(DataOurCars.electricCarSectionButtonSubHeading).to.be.equal(PageOurCars.getTextElectricCarSectionButtonSubHeading);

        //Step5: Validate electric cars
        var actualElectricCarNames = PageOurCars.getElectricCarNames();
        var i=0;
        actualElectricCarNames.forEach(element => {
            expect(DataOurCars.expectedElectricCarNames[i]).to.be.equal(element);
            i=i+1;
      });

    });
    
    
    it("Verify Hybrid cars category and sub categories under it", function()
    {
        //Step1: Validate Hybrid car section heading and subheading
        PageOurCars.clickOnHybridCars();
        expect(DataOurCars.hybridCarSectionButtonHeading).to.be.equal(PageOurCars.getTextHybridCarSectionButtonHeading);
        expect(DataOurCars.hybridCarSectionButtonSubHeading).to.be.equal(PageOurCars.getTextHybridCarSectionButtonSubHeading);

        //Step5: Validate Hybrid cars
        var actualHybridCarNames = PageOurCars.getHybridCarNames();
        var i=0;
        actualHybridCarNames.forEach(element => {
            expect(DataOurCars.expectedHybridCarNames[i]).to.be.equal(element);
            i=i+1;
      });
    });
});
