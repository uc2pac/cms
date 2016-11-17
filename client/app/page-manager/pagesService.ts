import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class PagesService {
    constructor(private http: Http) {

    }

    // TODO: redo to observables !!!!!!!!!!!ASAP
    getPage(id) {
        return this.http.get(`http://localhost:3333/api/pages.getone?id=${id}`)
            .map((response) => response.json())
            .share();
    }

    getPages() {
        return this.http.get('http://localhost:3333/api/pages.get')
            .map((response) => response.json())
            .share();
    }

    // TODO: redo to observables !!!!!!!!!!!ASAP
    addPage() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3333/api/pages.post', JSON.stringify({'title': 'super tirle'}), options)
            .map((response) => response.json())
            .share();
    }

    updatePage() {

    }

    deletePage() {

    }
}