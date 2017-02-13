import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { //=> Test Suite

    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        comp = new AppComponent();
    });

    it("is defined", () => { //=> Spec
        expect(comp).toBeTruthy();
    });

    it("title defined", () => {
        comp.ngOnInit();
        expect(comp.title).toBe("hallo basta");
    });
   
});
