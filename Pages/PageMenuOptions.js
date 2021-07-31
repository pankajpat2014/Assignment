const ElementUtil = require('../util/ElementUtil');

class PageMenuOptions {
    //page locators
    get hamburgerMenu() { return $('button#sitenav-v2-sidenav-toggle')}
    get menuOptions() {return $$('div.sitenav-sidenav-scrollable-block button');}
    get menuBuyOption() {return $('div.SiteNav_LinksMenu button:nth-child(1)')}
    get menuBuySubMenuOptions() {return $$('a._SiteNav-ab ');}

    //page actions
    menuOptionsText() {
        var i=0;
        var options=[];
        this.menuOptions.forEach(element => {
            options[i]=element.getText();
            i=i+1;
    });
    return options;
    }

    menuBuySubMenuOptionsText() {
        var i=0;
        var options=[];
        this.menuBuySubMenuOptions.forEach(element => {
            options[i]=element.getText();
            i=i+1;
    });
    return options;
    }

    getPageTitle()
    {
        return ElementUtil.getPageTitle()
    }

    navigatToMenu()
    {
        ElementUtil.elelmentClick(this.hamburgerMenu);
    }

    navigatToBuyMenuOption()
    {
        ElementUtil.elelmentClick(this.menuBuyOption)   
    }
}

module.exports = new PageMenuOptions();