import { PersonService } from './person.service';
import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

describe('Person Service', () => {
    let service: PersonService;
    let mockBackend: MockBackend;

    beforeEach(() => {
        //service = new PersonService();
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                PersonService,
                MockBackend,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });

        mockBackend = TestBed.get(MockBackend);
    });
    // beforeEach(() => {
    //     service = TestBed.get(PersonService);
    // })
    beforeEach(inject([PersonService], (s: PersonService) => {
        service = s;
    }));

    it('Get a person', () => {
        expect(service.getPerson(1).id).toEqual(1);
        expect(service.getPerson(1).firstname).toEqual("Thomas");
    });

    it('Should get a person async', () => {
        service.getPersonAsync(1).then((result) => {
            expect(result.firstname).toBe('Thomas2');
        });
    });

    it('Should get a person async with fakeAsync', fakeAsync(() => {
        let p;
        service.getPersonAsync(1).then((result) => {
            p = result;
        });
        expect(p).not.toBeDefined();

        tick(50);
        expect(p).not.toBeDefined();

        tick(50);
        expect(p).toBeDefined();
    }));

    it('Should return the json of persons', async(() => {
        mockBackend.connections.subscribe((c: MockConnection) => {
            c.mockRespond(new Response
                    (new ResponseOptions(`{
                        "id": 4,
                        "firstname": "Thomas",
                        "lastname": "Gassmann",
                        "twitterhandle": "gassmannT"
                    }`))
                );
        });

        service.getPersons().subscribe((data) => {
            console.log("test");
            expect(data[0].firstname).toBe('Thomas1');
        });
    }));
});
