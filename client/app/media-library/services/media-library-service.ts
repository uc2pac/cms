import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class MediaLibraryService {
    constructor(private http: Http) {

    }

    getBaseDirectories() {
        return this.http.get('http://localhost:3333/api/directories')
            .map((response: Response) => response.json())
            .share();
    }

    addResource(name, parent) {
        let params = {
            name: name,
            parent: parent
        };

        return this.http.post('http://localhost:3333/api/directories', params)
            .map((response: Response) => response.json())
            .share();
    }
}