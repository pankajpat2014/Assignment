# Project Title: Volvo assignment

Exercise:
1) Test "https://www.volvocars.com/intl/v/car-safety/a-million-more"

## Getting Started 
This is a webdriverIO project which developed using Mocha framework and JavaScript, chai, npm, allure reporting

### Prerequisites
Recommended below configuration used for this project:
1. Computer with Windows 10 -64bit OS
2. Visual Studio Code IDE: Version: 1.58.2
3. Java: java version "1.8.0_281"
4. npm: 6.14.13
5. chromedriver: 92.0.0
6. chai: 4.3.4,

### Installing
This section covers a step-by-step series of steps that tell you how to get a env running

1. Install Visual Studio Code IDE
2. Create workspace and add folder, open terminal and enter below commands one by one.
	npm init : Use for creating package.json
	-Enter package name, author, version and other details
	npm install webdriverio --save-dev
	npm install @wdio/cli
	npm install @wdio/sync
	.\node_modules\.bin\wdio config
	- This helps in configuring the project. Choose the appropriate data
	- Enter baseurl
	npm install chai --save-dev
	npm install local-runner --save-dev
3. Open wdio.conf.js and enter chai assertions details as below.
	beforeTest: function () {

        const chai = require('chai')
        const chaiWebdriver = require('chai-webdriverio').default
        chai.use(chaiWebdriver(browser))

        global.assert = chai.assert
        global.should = chai.should
        global.expect = chai.expect
	},
	Enter below code to capture screenshots after failureafterTest: function (
        test,
        context,
        { error, result, duration, passed, retries }
      ) {
        if (error) {
          browser.takeScreenshot();
        }
      },


### Coding style tests and framework design
In this section, I will explain how I created the Page object model framework and its folder structure
It has below 4 major folders
1. Pages: This is basically backbone of page object model. It contains page locators and page actions. I have created below .js files under it.
	- PageVovloSafteyCampaign : This page contains the page locators and page actions for the main landing page of the Safety campaign.
	- PageMenuOptions : This page contains the page locators and page actions for the side menu (Hamburger icon).
	- PageOurCars : This page contains the page locators and page actions for the "Our Cars" section
	- PageExploreOurModels : This page contains the page locators and page actions for the "Explore Our Models" section.
2. testData: This folder contains all the required test data. It contains below .js files.
	- DataPageMessages : This file contains all the headings and labels which are present on the main landing page of the Saftey campagin.
	- DataExploreOurModels: This file contains data related to "Explore Our Models" section.
	- DataMenuOptions : This file contains the required test data which is appears after clicking on the side menu (Hamburger icon).
	- DataOurCars : This file contains data related to "Our Cars" section.
	- DataPageTitles : This file contains all the page titles of our application
3. util: This folder contains all the functions which are used in performing generic actions such as button click, entering text etc.
	- ElementUtil: This js file contains common functions which are getting operated on web page elements such as elelmentClick, scrollIntoViewThenClick etc.
	- VolvoCommon : This js contains commonly used methods such as navigateToHomePage
4. test: This is our actual test folder. This contains the actual tests which are created by using above folders. I have covered below tests in it
	- Test1VolvoSafteyCampaignHome : This test file tests Safety campaign Home page
	- Test2OurCars : This test file tests "Our Cars section
	- Test3MenuOptions : This file tests menu options
	- Test4ExploreOurModels : This file tests "Explore our models" sections

I have also created one common file as below
- config.js : This file will act as a properties file and contains generic data which can be frequently used in our tests

Below are default webdriverIO files 
- wdio.conf : This contains all the project configuration details.
- package.json : This json file contains all the required dependencies.

- Allure report : This folder contains all the test run results. This also captures the screenshots after the failure. I have added below code in wdio.config for capturing screenshots in the allure report.
afterTest: function (
        test,
        context,
        { error, result, duration, passed, retries }
      ) {
        if (error) {
          browser.takeScreenshot();
        }
      },
	
## Running the tests (Explain how to run the automated tests for this system)
- Run the tests: npm run test
		with npm run tests, tests are started executing parallely on Google chrome browser
- generate reports: allure generate --clean and allure open

### Break down into tests (Explain what these tests test and why)
I have created below 4 test scenarios : 
- Test1VolvoSafteyCampaignHome : This test file tests Safety campaign Home page
- Test2OurCars : This test file tests "Our Cars" section
- Test3MenuOptions : This file tests menu options
- Test4ExploreOurModels : This file tests "Explore our models" sections

## Deployment
We can create docker image and use it for deployment

## Versioning
1.0.0

## Authors
Pankaj Patil

