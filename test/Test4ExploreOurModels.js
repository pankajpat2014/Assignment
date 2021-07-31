const { assert } = require('chai');
const MenuOptionsPage = require('../Pages/PageMenuOptions')
const SafteyPage = require('../Pages/PageVovloSafteyCampaign')
const DataExploreOurModels = require('../testData/DataExploreOurModels')
const DatatPageTitles = require('../testData/DataPageTitles')
const PageExploreOurModels = require('../Pages/PageExploreOurModels')


describe("Test Explore our models- option", function()
{
    it("Verify Explore our models- option", function()
    {
      //Step1: Navigate to Volvo seat belt saftey campaign page and verify the title
        SafteyPage.navigatenToSafteyCampaignPage()
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

      //Step2: Accept Cookies
        SafteyPage.acceptCookiesIfPresent()

      //Step3: Scroll Down to - Explore our models- option
      PageExploreOurModels.scrollToExploreOurModels();

      //Step4: Verify SUVs are present
        var SUVNames = PageExploreOurModels.getCarNames();
        for(let i=0; i<4; i++)
        {
          expect(DataExploreOurModels.expectedSUVOptions[i]).to.be.equal(SUVNames[i]);
 
        }

      //Step5: Click on Right Navigation arrow key
        PageExploreOurModels.clickOnNavigationArrows(4);

      //Step6: Verify ESTATE are present
        var ESTATENames = PageExploreOurModels.getCarNames();
        for(let i=4; i<6; i++)
        {
          expect(DataExploreOurModels.expectedESTATEOptions[i-4]).to.be.equal(ESTATENames[i]);
        }
    
      //Step7: Verify SEDAN are present
        for(let i=6; i<8; i++)
        {
          expect(DataExploreOurModels.expectedSEDANOptions[i-6]).to.be.equal(ESTATENames[i]);
        } 
    });
});