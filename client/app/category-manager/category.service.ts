import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class CategoryService {
    constructor(private http: Http) {

    }

    getCategory(id) {
        return this.http.get(`http://localhost:3333/api/categories/${id}`)
            .map((response: Response) => response.json())
            .share();
    }

    getCategories() {
        return this.http.get('http://localhost:3333/api/categories')
            .map((response: Response) => response.json())
            .share();
    }

    addCategory(category: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3333/api/categories', category, options)
            .map((response: Response) => response.json())
            .share();
    }

    updateCategory(id, category) {
        return this.http.put(`http://localhost:3333/api/categories/${id}`, {category})
            .map((response: Response) => response.json())
            .share();
    }

    deleteCategory(id) {
        return this.http.delete(`http://localhost:3333/api/categories/${id}`)
            .map((response: Response) => response.json())
            .share();
    }
}