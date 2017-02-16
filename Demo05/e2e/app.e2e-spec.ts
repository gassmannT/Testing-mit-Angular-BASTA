import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('should display title', function () {
        expect(element(by.css('h1')).getText()).toEqual("hallo basta");
    });

});