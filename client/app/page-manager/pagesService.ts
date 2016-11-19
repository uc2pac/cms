import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class PagesService {
    constructor(private http: Http) {

    }

    getPage(id) {
        return this.http.get(`http://localhost:3333/api/pages/${id}`)
            .map((response: Response) => response.json())
            .share();
    }

    getPages() {
        return this.http.get('http://localhost:3333/api/pages')
            .map((response: Response) => response.json())
            .share();
    }

    addPage(title: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3333/api/pages', {'title': title}, options)
            .map((response: Response) => response.json())
            .share();
    }

    updatePage(id, page) {
        return this.http.put(`http://localhost:3333/api/pages/${id}`, {page})
            .map((response: Response) => response.json())
            .share();
    }

    deletePage(id) {
        return this.http.delete(`http://localhost:3333/api/pages/${id}`)
            .map((response: Response) => response.json())
            .share();
    }
}