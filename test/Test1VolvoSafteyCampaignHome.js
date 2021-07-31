const MenuOptionsPage = require('../Pages/PageMenuOptions')
const SafteyPage = require('../Pages/PageVovloSafteyCampaign')
const DataPageMessages = require('../testData/DataPageMessages')
const DatatPageTitles = require('../testData/DataPageTitles')

describe("Test Saftey Campaign Home page", function()
{
    it("Verify page headings", function()
    {
        //Step1: Navigate to Volvo seat belt saftey campaign page and verify the title
        SafteyPage.navigatenToSafteyCampaignPage()
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Step2: Accept Cookies
       SafteyPage.acceptCookiesIfPresent()

       //Step 3: Verify the main heading "Ideas that change the world are often the most controversial."
        expect(SafteyPage.getLandingPageMessage).to.be.equal(DataPageMessages.msg1);

        //Step 4: Verify the h2 heading "After we introduced the 3-point safety belt, we faced a world of criticism....."
         expect(SafteyPage.getIntroMessage2).that.contains(DataPageMessages.msg2);

        //Step 5: Verify the h2 heading "A million more."
         expect(SafteyPage.getIntroMessage3).to.be.equal(DataPageMessages.msg3);

        //Step 6: Verify the h2 heading "Ideas that change the world are often the most controversial."
        expect(SafteyPage.getIntroMessage4).to.be.equal(DataPageMessages.msg4);
    });

    it("Verify feature section-Sepeed up", function()
    {
        //Step1: Verify page title
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Step 2: Verify Speed cap section icon
        expect(SafteyPage.isSpeedUpSectionIconDisplayed).to.be.equal(true);

         //Step 3: Verify Speed cap section icon text
         expect(SafteyPage.getSpeedUpSectionIconText).to.be.equal(DataPageMessages.speedUpSectionText);

         //Step 4: Verify Speed cap section icon Description
         expect(SafteyPage.getSpeedUpSectionIconDescription).to.be.equal(DataPageMessages.speedUpSectionDescription);
    });

    it("Verify feature section-Highway pilot", function()
    {
        //Step1: Verify page title
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Step 2: Verify Highway pilot section icon
        expect(SafteyPage.isHighwayPilotSectionIconDisplayed).to.be.equal(true);

        //Step 3: Verify Highway pilot section icon text
        expect(SafteyPage.getHighwayPilotSectionIconText).to.be.equal(DataPageMessages.HighwayPilotSectionText);

        //Step 4: Verify Highway pilot section icon Description
         expect(SafteyPage.getHighwayPilotSectionIconDescription).to.be.equal(DataPageMessages.HighwayPilotSectionDescription);
    });

    it("Verify all the video links present on the page", function()
    {
        //Step1: Verify page title
        expect(DatatPageTitles.safteyPageTitel).to.be.equal(MenuOptionsPage.getPageTitle());

        //Verify all video links present on the page
        var actualListOfVideoLinks = SafteyPage.getListOfVideoLinks();
        var i=0;
        actualListOfVideoLinks.forEach(element => {
            expect(DataPageMessages.videoLinks[i]).to.be.equal(element);
            i=i+1;
        });
    });
});
