import { PersonDataService } from './person-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Person } from './person';
import { PersonService } from './person.service';
import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

describe('Person Service', () => {
    let service: PersonService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        //service = new PersonService();
        TestBed.configureTestingModule({
            imports: [HttpModule, InMemoryWebApiModule.forRoot(PersonDataService, { delay: 0 })],
            providers: [
                PersonService,
                // MockBackend, { provide: XHRBackend, useClass: MockBackend }
            ]
        });

        service = TestBed.get(PersonService);
        mockBackend = TestBed.get(XHRBackend);
    });
    // beforeEach(() => {
    //     service = TestBed.get(PersonService);
    // })
    // beforeEach(inject([PersonService], (s: PersonService) => {
    //     service = s;
    // }));

    it('Should get a person', () => {
        expect(service.getPerson(1).id).toBe("1");
        expect(service.getPerson(1).firstname).toEqual("Thomas");
    });

    it('Should get a person async', async(() => {
        service.getAsyncPromise(1).then(result => {
            expect(result.firstname).toBe('Thomas');
        });
    }));

    it('Should get a person async with fakeAsync', fakeAsync(() => {
        let p;
        service.getAsyncPromise(1).then(result => {
            p = result;
        });
        expect(p).not.toBeDefined();

        // tick(250);
        // expect(p).not.toBeDefined();

        tick(1);
        expect(p).toBeDefined();
    }));

    it('Should return the json of persons', async(() => {
        // Arrange
        let items: Person[] = null;
        // mockBackend.connections.subscribe((c: MockConnection) => {
        //     expect(c.request.url).toEqual('api/persons');
        //     c.mockRespond(new Response(new ResponseOptions({
        //         body: {
        //             data: [{
        //                 id: "6",
        //                 firstname: "Thomas",
        //                 lastname: "Gassmann",
        //                 twitterhandle: "gassmannT"
        //             }]
        //         }
        //     }))
        //     );
        // });

        // Act
        service.getAllAsync().subscribe(data => {
            items = data;
        });

        // Assert
        // mockBackend.verifyNoPendingRequests();
        expect(items[0].firstname).toEqual("Thomas");
    }));




});
