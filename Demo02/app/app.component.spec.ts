import { AppComponent } from './app.component';
describe("AppComponent", () => {

    let c: AppComponent;

    beforeEach(() => {
        c = new AppComponent();
    });

    it("should be defined", () => {
        expect(c).toBeTruthy();
    });

    it("is title set", () => {
        c.ngOnInit();
        expect(c.title).toBe("hallo basta");
    });
});