const ElementUtil = require('../util/ElementUtil');
const Config = require('../config');


class PageExploreOurModels {
    //page locators
    get exploreOurModelsParent() { return $('.mp .a.mq')}
    get exploreOurModelsParentText() { return this.exploreOurModelsParent.$(' h2');}
    get labelCarNames() { return this.exploreOurModelsParent.$$(' h4 span:nth-child(1)');}
    get buttonNavigateCars() {return $('//button[@data-autoid="springCarouselNextButton"]');}

    //page actions
    get getExploreOurModelsParentText()
    {
        return ElementUtil.elementGetText(this.exploreOurModelsParentText);
    }

    scrollToExploreOurModels()
    {
         ElementUtil.scrollIntoViewForElement(this.exploreOurModelsParent);
    }

    clickOnNavigationArrows(numberOfClicks)
    {
        for(let i=0; i<numberOfClicks; i++)
        {
         ElementUtil.elelmentClick(this.buttonNavigateCars);
         browser.pause(Config.shortWait);
        }
    }

    getCarNames() {
        var i=0;
        var cars=[];
        this.labelCarNames.forEach(element => {
            cars[i]=element.getText();
            i=i+1;
    });
    return cars;
    }

}
module.exports = new PageExploreOurModels();