"use strict";
var forms_1 = require("@angular/forms");
var person_detail_component_1 = require("./person-detail.component");
var testing_1 = require("@angular/core/testing");
describe('Person Detail Component', function () {
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [person_detail_component_1.PersonDetailComponent]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(person_detail_component_1.PersonDetailComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    it("should render the title correctly", testing_1.fakeAsync(function () {
        expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: ");
        comp.person = {
            id: 1,
            firstname: "Thomas"
        };
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(fixture.nativeElement.querySelector('h2').innerHTML).toBe("PersonDetail: Thomas");
        });
    }));
});
//# sourceMappingURL=person-detail.component.spec.js.map