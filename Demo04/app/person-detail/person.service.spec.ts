import { HttpModule } from '@angular/http';
import { async, TestBed } from '@angular/core/testing';
import { PersonService } from './person.service';

describe("PersonService", () => {
    let service: PersonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [PersonService]
        });
        service = TestBed.get(PersonService);
    });

    it("should get a person", () => {
        expect(service.getPerson(1).id).toBe(1);
    });
    it("should get a person", async(() => {
        service.getPersonAsync(1).then((person) => {
            expect(person.id).toBe(1);
        });
    }));
});