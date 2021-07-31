const config =require('../config')

class VolvoCommon{

    navigateToHomePage(element)
    {
        element.waitForDisplayed()
        element.click()

    }
}

module.exports = new VolvoCommon()
