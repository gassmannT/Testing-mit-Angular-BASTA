import { FormsModule } from '@angular/forms';
import { PersonDetailComponent } from './person-detail.component';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

describe('Person Detail Component', () => {
    let comp: PersonDetailComponent;
    let fixture: ComponentFixture<PersonDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [PersonDetailComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonDetailComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges(); //triggers a change detection cycle

    });

    it("should render the title correctly", fakeAsync(() => {
        expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: ");
        comp.person = {
            id: 1,
            firstname: "Thomas"
        }
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: Thomas");
        });
    }));


});