"use strict";
var person_service_1 = require("./person.service");
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
require("rxjs/add/operator/map");
describe('Person Service', function () {
    var service;
    var mockBackend;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                person_service_1.PersonService,
                testing_2.MockBackend,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }
            ]
        });
        mockBackend = testing_1.TestBed.get(testing_2.MockBackend);
    });
    beforeEach(testing_1.inject([person_service_1.PersonService], function (s) {
        service = s;
    }));
    it('Get a person', function () {
        expect(service.getPerson(1).id).toEqual(1);
        expect(service.getPerson(1).firstname).toEqual("Thomas");
    });
    it('Should get a person async', function () {
        service.getPersonAsync(1).then(function (result) {
            expect(result.firstname).toBe('Thomas2');
        });
    });
    it('Should get a person async with fakeAsync', testing_1.fakeAsync(function () {
        var p;
        service.getPersonAsync(1).then(function (result) {
            p = result;
        });
        expect(p).not.toBeDefined();
        testing_1.tick(50);
        expect(p).not.toBeDefined();
        testing_1.tick(50);
        expect(p).toBeDefined();
    }));
    it('Should return the json of persons', testing_1.async(function () {
        mockBackend.connections.subscribe(function (c) {
            c.mockRespond(new http_1.Response(new http_1.ResponseOptions("{\n                        \"id\": 4,\n                        \"firstname\": \"Thomas\",\n                        \"lastname\": \"Gassmann\",\n                        \"twitterhandle\": \"gassmannT\"\n                    }")));
        });
        service.getPersons().subscribe(function (data) {
            console.log("test");
            expect(data[0].firstname).toBe('Thomas1');
        });
    }));
});
//# sourceMappingURL=person.service.spec.js.map