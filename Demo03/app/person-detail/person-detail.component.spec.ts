import { PersonDetailComponent } from './person-detail.component';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe("PersonDetail", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PersonDetailComponent]
        }).compileComponents();
    }));

    let comp: PersonDetailComponent;
    let f: ComponentFixture<PersonDetailComponent>;
    beforeEach(() => {
        f = TestBed.createComponent(PersonDetailComponent);
        comp = f.componentInstance;
        f.detectChanges();
    });

    it("should render the title", () => {
        expect(f.nativeElement.querySelector("h2").innerHTML).toBe("PersonDetail: ");
    });

});