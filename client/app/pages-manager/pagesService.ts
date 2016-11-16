import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class PagesService {
    constructor(private http: Http) {

    }

    // TODO: redo to observables !!!!!!!!!!!ASAP
    getPages() {
        return this.http.get('http://localhost:3333/api/pages.get')
            .map((response) => response.json())
            .share();
    }

    // TODO: redo to observables !!!!!!!!!!!ASAP
    addPage() {
        console.log('hit again');
        return this.http.post('http://localhost:3333/api/pages.post', {})
            .map((response) => response.json())
            .share();
    }

    getPage() {

    }

    updatePage() {

    }

    deletePage() {

    }
}