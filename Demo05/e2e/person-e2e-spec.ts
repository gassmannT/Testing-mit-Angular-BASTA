import * as fs from 'fs';
import { by, element } from 'protractor/built';
import { browser } from 'protractor';

describe("Person simulator", () => {
    beforeEach(() => {
        browser.get("/");
    });

    it("should have three persons in the list", () => {
        let persons = element.all(by.css(".person-table .person"));
        expect(persons.count()).toBe(3);
    });

    xit("should have three persons in the list", () => {
        let person = element.all(by.css(".person-table .person")).first();

        person.click();

        let inputField = element(by.id("inputFirstname"));
        let btnSubmit = element(by.css("button[type=submit]"));

        inputField.clear();
        inputField.sendKeys("Hans");

        btnSubmit.click();

        let personFirstname = element.all(by.css(".person-table .person td")).first();
        expect(personFirstname).toBe("Hans");
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

        inputField.sendKeys("Hans");
        
        expect(btnSubmit.isEnabled()).toEqual(true);

        browser.takeScreenshot().then((png) => {
            var stream = fs.createWriteStream("screenshot-2.png");
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });

        btnSubmit.click();
        let personFirstname = element.all(by.css(".person-table .person td")).first();

        expect(personFirstname.getText()).toEqual("Hans");
    });
});