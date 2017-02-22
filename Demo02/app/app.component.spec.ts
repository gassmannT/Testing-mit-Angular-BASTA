import { AppComponent } from './app.component';

describe("AppComponent", () => {
    let comp: AppComponent;

    beforeEach(() => {
        comp = new AppComponent();
    });

    it("is defined", () => {
        expect(comp).toBeTruthy();
    });

    it("title defined", () => {
        comp.ngOnInit();
        expect(comp.title).toBe("hallo basta");
    });

});
