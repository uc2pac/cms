import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class MediaLibraryService {
    constructor(private http: Http) {

    }

    getResources(path) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('path', path);

        return this.http.get('http://localhost:3333/api/directories', {search: params})
            .map((response: Response) => response.json())
            .share();
    }

    addResource(metadata) {
        let params = {
            name: name,
            parent: parent
        };

        return this.http.post('http://localhost:3333/api/directories', metadata)
            .map((response: Response) => response.json())
            .share();
    }
}