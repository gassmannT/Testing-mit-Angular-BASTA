import { browser, element, by } from 'protractor';

describe('person end-to-end test', () => {
    beforeEach(() => {
        browser.get("/");
    });

    it("should show four person when we first load the app", () => {
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

        inputField.clear();
        //expect(btnSubmit.isEnabled()).toEqual(false);

        inputField.sendKeys("Hans");        
        expect(btnSubmit.isEnabled()).toEqual(true);

        btnSubmit.click();
        let personFirstname = element.all(by.css(".person-table .person td")).first();     

        //TODO
        expect(personFirstname.getText()).toEqual("Thomas");
    });

});