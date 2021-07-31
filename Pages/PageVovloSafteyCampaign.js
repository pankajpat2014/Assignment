const config = require('../config');
const ElementUtil = require('../util/ElementUtil');

class PageVovloSafteyCampaign{
    //page locators
    get buttonAcceptCookies() {  return  $('button.accept-cookies-button');   }
    get buttonAcceptCookies1() {  return  $('button.accept-cookies-button');   }
    get msgLandingPageMessage() {  return  $('div#ModelIntro-1 h2');   }
    get msgIntroMessage2() {  return  $('div#ModelIntro-1 p');   }
    get msgIntroMessage3() {  return  $('p span.fi:nth-child(1)');   }
    get msgIntroMessage4() {  return  $('span.ba.be.fi');   }
    get sectionSeedUpParent() { return $('div#IconCallouts-1 .av.fz:nth-child(1)'); }
    get iconSpeedUpSection() { return this.sectionSeedUpParent.$(' svg');}
    get iconTextSpeedUpSection() { return this.sectionSeedUpParent.$(' em');}
    get iconDescriptionSpeedUpSection() { return this.sectionSeedUpParent.$(' p');}
    get sectionHighwayPilotParent() { return $('div#IconCallouts-1 .av.fz:nth-child(2)'); }
    get iconHighwayPilotSection() { return this.sectionHighwayPilotParent.$(' svg');}
    get iconTextHighwayPilotSection() { return this.sectionHighwayPilotParent.$(' em');}
    get iconDescriptionHighwayPilotSection() { return this.sectionHighwayPilotParent.$(' p');}
    get videoLinks() { return $$('//video/source');}
    get alexVideo() {  return  $('//em[text()="Summer"]');   }

    //page Actions
    get isSpeedUpSectionIconDisplayed()
    {
        ElementUtil.scrollIntoViewForElement(this.iconSpeedUpSection);
        return ElementUtil.isElementDisplay(this.iconSpeedUpSection);
    }

    get getSpeedUpSectionIconText()
    {
        ElementUtil.scrollIntoViewForElement(this.iconTextSpeedUpSection);
        return ElementUtil.elementGetText(this.iconTextSpeedUpSection);
    }

    get getSpeedUpSectionIconDescription()
    {
        ElementUtil.scrollIntoViewForElement(this.iconDescriptionSpeedUpSection);
        return ElementUtil.elementGetText(this.iconDescriptionSpeedUpSection);
    }

    get isHighwayPilotSectionIconDisplayed()
    {
        ElementUtil.scrollIntoViewForElement(this.iconHighwayPilotSection);
        return ElementUtil.isElementDisplay(this.iconHighwayPilotSection);
    }

    get getHighwayPilotSectionIconText()
    {
        ElementUtil.scrollIntoViewForElement(this.iconTextHighwayPilotSection);
        return ElementUtil.elementGetText(this.iconTextHighwayPilotSection);
    }

    get getHighwayPilotSectionIconDescription()
    {
        ElementUtil.scrollIntoViewForElement(this.iconDescriptionHighwayPilotSection);
        return ElementUtil.elementGetText(this.iconDescriptionHighwayPilotSection);
    }

    get getLandingPageMessage()
    {
        return ElementUtil.elementGetText(this.msgLandingPageMessage);
    }

    get getIntroMessage2()
    {
        return ElementUtil.elementGetText(this.msgIntroMessage2);

    }

    get getIntroMessage3()
    {
        ElementUtil.scrollIntoViewForElement(this.msgIntroMessage3)
        return ElementUtil.elementGetText(this.msgIntroMessage3);
    }

    get getIntroMessage4()
    {
        ElementUtil.scrollIntoViewForElement(this.msgIntroMessage4)
        return ElementUtil.elementGetText(this.msgIntroMessage4);
    }

    navigatenToSafteyCampaignPage()
    {
        browser.url('/intl/v/car-safety/a-million-more');
        browser.setTimeout({ 'implicit': 6000 })
        browser.maximizeWindow();
        browser.pause(config.shortWait);
    }

    acceptCookiesIfPresent()
    {
        if(this.buttonAcceptCookies.isExisting() === true)
        {
            ElementUtil.elelmentClick(this.buttonAcceptCookies);
             browser.pause(config.shortWait);
        }
    }

    getListOfVideoLinks() {
        ElementUtil.scrollIntoViewForElement(this.alexVideo);
        var i=0;
        var options=[];
        this.videoLinks.forEach(element => {
            options[i]=element.getAttribute('src');
            i=i+1;
    });
    return options;
    }
}

module.exports = new PageVovloSafteyCampaign();