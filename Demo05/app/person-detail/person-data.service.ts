import { Observable, Observer } from 'rxjs/Rx';
import { Response, ResponseOptions, URLSearchParams } from '@angular/http';
import { Person } from './person';
import {
    createErrorResponse,
    emitResponse,
    HttpMethodInterceptorArgs,
    InMemoryDbService,
    STATUS
} from 'angular-in-memory-web-api';

export class PersonDataService implements InMemoryDbService {
    createDb() {
        let persons: Person[] = [
            {
                id: 1,
                firstname: "Thomas",
                lastname: "Huber",
                twitterhandle: "thomasclaudiushuber"
            },
            {
                id: 2,
                firstname: "Thomas",
                lastname: "Bandixen",
                twitterhandle: "tbandixen"
            },
            {
                id: 3,
                firstname: "Thomas",
                lastname: "Gassmann",
                twitterhandle: "gassmannT"
            }
        ];
        return { persons };
    }
}