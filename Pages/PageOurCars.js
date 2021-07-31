const ElementUtil = require('../util/ElementUtil');

class PageOurCars {
    //page locators
    get btnOurCars() { return $('//button[@id="nav:topNavCarMenu"]')}
    get btnElectricCarsSection() { return $('button#site-nav-cars-menu-section-tab-0');}
    get listElectricCars() { return $$('#site-nav-cars-menu-section-panel-0 em');}
    get btnHybridCarsSection() { return $('button#site-nav-cars-menu-section-tab-1');}
    get listHybridCars() { return $$('#site-nav-cars-menu-section-panel-1 em');}

    //page actions
    get getTextElectricCarSectionButtonHeading()
    {
        return ElementUtil.elementGetText(this.btnElectricCarsSection.$(' h2'))
    }
   
    get getTextElectricCarSectionButtonSubHeading()
    {
        return ElementUtil.elementGetText(this.btnElectricCarsSection.$(' p'))
    }
    navigatToOurCars()
    {
        ElementUtil.elelmentClick(this.btnOurCars)   
    }

    clickOnElectricCars()
    {
        ElementUtil.elelmentClick(this.btnElectricCarsSection)   
    }
    
    clickOnHybridCars()
    {
        ElementUtil.elelmentClick(this.btnHybridCarsSection)   
    }

    get getTextHybridCarSectionButtonHeading()
    {
        return ElementUtil.elementGetText(this.btnHybridCarsSection.$(' h2'))
    }
   
    get getTextHybridCarSectionButtonSubHeading()
    {
        return ElementUtil.elementGetText(this.btnHybridCarsSection.$(' p'))
    }
    getElectricCarNames() {
        var i=0;
        var options=[];
        this.listElectricCars.forEach(element => {
            options[i]=element.getText();
            i=i+1;
    });
    return options;
    }

    getHybridCarNames() {
        var i=0;
        var options=[];
        this.listHybridCars.forEach(element => {
            options[i]=element.getText();
            i=i+1;
    });
    return options;
    }
}

module.exports = new PageOurCars();