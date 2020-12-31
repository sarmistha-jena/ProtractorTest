const { element, browser } = require("protractor");
var logger = require('./log');
describe('Bank Home page Test', () => {
    it('verify the page title', () => {
        browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        expect(element(by.buttonText('Customer Login')).isDisplayed()).toBe(true);
        expect(element(by.buttonText('Bank Manager Login')).isDisplayed()).toBe(true, "Bank Manager Login button expected to exist.");
        browser.getTitle().then((title) => {
            expect(title).toMatch("XYZ Bank", "Page title is incorrect");
            logger.log('info','Completed First test');
        })
    })
});