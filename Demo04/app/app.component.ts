import { Person } from './person-detail/person';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
        <person-list></person-list>
        `
})
export class AppComponent implements OnInit {
    public title: string;

    constructor() { }

    ngOnInit() {
        this.title = "hallo basta";
    }
}
