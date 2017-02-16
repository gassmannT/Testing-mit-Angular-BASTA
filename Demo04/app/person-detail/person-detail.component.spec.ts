// import { PersonService } from './person.service';
// import { FormsModule } from '@angular/forms';
// import { PersonDetailComponent } from './person-detail.component';
// import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

// describe('Person Detail Component', () => {
//     let comp: PersonDetailComponent;
//     let fixture: ComponentFixture<PersonDetailComponent>;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             imports: [FormsModule],
//             providers: [PersonService],
//             declarations: [PersonDetailComponent]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(PersonDetailComponent);
//         comp = fixture.componentInstance;
//         fixture.detectChanges(); //triggers a change detection cycle

//     });

//     it("should render the title correctly", async(() => {
//         expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: ");
//         comp.personId = 1;
//         comp.ngOnInit();
        
//         fixture.detectChanges();
//         fixture.whenStable().then(async(() => {
//             expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: Thomas");
//         }));
//     }));


// });