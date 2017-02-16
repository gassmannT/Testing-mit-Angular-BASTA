import * as fs from 'fs';
import { browser, element, by } from 'protractor';

describe('person end-to-end test', () => {
    beforeEach(() => {
        browser.get("/");
    });

    it("should show three person when we first load the app", () => {
        let persons = element.all(by.css(".person-table .person"));
        expect(persons.count()).toEqual(3);
    });


    it("should show the first person detail", () => {
        let person = element.all(by.css(".person-table .person")).first();
        person.click();
        expect(browser.getCurrentUrl()).toContain("/person/1");

        let inputFieldText = element(by.id("inputFirstname")).getAttribute("value");

        expect(inputFieldText).toEqual("Thomas");
    });


    it("should update the first person", () => {
        let person = element.all(by.css(".person-table .person")).first();
        person.click();

        let inputField = element(by.id("inputFirstname"));
        let btnSubmit = element(by.css("button[type=submit]"));

        browser.takeScreenshot().then((png) => {
            var stream = fs.createWriteStream("screenshot-1.png");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });

        inputField.clear();

        browser.takeScreenshot().then((png) => {
            var stream = fs.createWriteStream("screenshot-2.png");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });

        inputField.sendKeys("Hans");
        
        expect(btnSubmit.isEnabled()).toEqual(true);

        browser.takeScreenshot().then((png) => {
            var stream = fs.createWriteStream("screenshot-3.png");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });

        btnSubmit.click();
        let personFirstname = element.all(by.css(".person-table .person td")).first();

        expect(personFirstname.getText()).toEqual("Hans");
    });

});