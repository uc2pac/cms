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

        return this.http.get('http://localhost:3333/api/resources', {search: params})
            .map((response: Response) => response.json())
            .share();
    }

    addResource(metadata) {
        let params = {
            name: name,
            parent: parent
        };

        return this.http.post('http://localhost:3333/api/resources', metadata)
            .map((response: Response) => response.json())
            .share();
    }

    getImages(limit, skip) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('limit', limit);
        params.set('skip', skip);

        return this.http.get('http://localhost:3333/api/resources/images', {search: params})
            .map((response: Response) => response.json())
            .share();
    }
}