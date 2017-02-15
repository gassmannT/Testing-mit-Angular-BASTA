import { browser, element, by } from 'protractor';

describe('person end-to-end test', () => {
    beforeEach(() => {

    });

    it("should show four person when we first load the app", () => {
        browser.get("/")
        let persons = element.all(by.css(".person-table .person"));
        expect(persons.count()).toEqual(3);
    })

});