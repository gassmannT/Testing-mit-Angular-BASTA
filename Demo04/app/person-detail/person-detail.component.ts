import { PersonService } from './person.service';
import { Person } from './person';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'person-detail',
  templateUrl: 'app/person-detail/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  person: Person;

  @Input()
  personId: number;

  constructor(private personService: PersonService,
    private router: Router) { }

  ngOnInit(): void {
    this.person = this.personService.getPerson(this.personId);
  }

  onSave(valid: boolean) {
    if (valid) {
      //this.myService.Save(person);
       this.router.navigate(['/'])
    }
  }

  onBack() {
    this.router.navigate(['/'])
  }
}