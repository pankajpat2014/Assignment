class ElementUtil{

    elelmentClick(element)
    {
        element.waitForDisplayed()
        element.click()
    }

    scrollIntoViewThenClick(element)
    {
        this.scrollIntoViewForElement(element)
        element.click()
    }

    scrollIntoViewForElement(element)
    {
        if(!element.isDisplayedInView)
        { 
            element.scrollIntoView();
        }   
    }

    elementEnterValue(element, value)
    {
        element.waitForDisplayed()
        element.setValue(value)
    }

    elementGetText(element)
    {
        element.waitForDisplayed()
        return element.getText()
    }

    isElementDisplay(element)
    {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    getPageTitle()
    {
        return browser.getTitle()
    }

    getListOfEelements(elementObject) {
        var i=0;
        var options=[];
        this.elementObject.forEach(element => {
            options[i]=element.getAttribute('src');
            i=i+1;
    });
    return options;
    }


}
module.exports = new ElementUtil()