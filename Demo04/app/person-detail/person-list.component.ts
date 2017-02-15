import { PersonService } from './person.service';
import { Person } from './person';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'person-list',
    templateUrl: 'app/person-detail/person-list.component.html'
})
export class PersonListComponent implements OnInit {
    pageTitle: string = "Person";
    personList: Person[] = [];

    constructor(private personService: PersonService) { }

    onEdit(person: Person) {
        let link = ['/person', person.id];
        //this.router.navigate(link);
    }

    ngOnInit() {
        this.personService.getPersons().subscribe(res => this.personList = res);
    }
}