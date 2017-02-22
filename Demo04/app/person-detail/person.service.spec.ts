import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { async, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { PersonService } from './person.service';

describe("PersonService", () => {
    let service: PersonService;
    let mockBackend: MockBackend;

    // beforeEach(() => {
    //     service = new PersonService();
    // })

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PersonService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    // beforeEach(inject([PersonService], (s: PersonService) => {
    //     service = s;
    // }));

    beforeEach(() => {
        service = TestBed.get(PersonService);
        mockBackend = TestBed.get(XHRBackend);
    });

    it("Should get a person", () => {
        expect(service.getPerson(1).id).toEqual(1);
        expect(service.getPerson(1).firstname).toEqual("Thomas");
    });

    it("should get a person async", async(() => {
        service.getPersonAsync(1).then((p) => {
            expect(p.firstname).toBe("Thomas");
        });
    }));

    it("should get a person fakeAsync", fakeAsync(() => {
        let person;
        service.getPersonAsync(1).then((p) => {
            person = p;
        });

        expect(person).not.toBeDefined();

        tick(50);
        expect(person).not.toBeDefined();

        tick(50);
        expect(person).toBeDefined();

    }));

    it("should get all persons by observables", async(() => {
        mockBackend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toContain("/person-data.json");

            c.mockRespond(new Response(new ResponseOptions({
                body: [{ firstname: "Thomas" }]
            })));
        });

        service.getPersons().subscribe((persons) => {
            mockBackend.verifyNoPendingRequests();
            expect(persons[0].firstname).toBe("Thomas");
        });
    }));

});
