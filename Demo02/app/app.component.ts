import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>'
})
export class AppComponent implements OnInit {
    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    constructor() { }

    ngOnInit() {
        this.title = "hallo basta";
    }
}