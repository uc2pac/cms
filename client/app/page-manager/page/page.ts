import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {PagesService} from '../pagesService';

@Component({
    selector: 'page',
    template: require('./page.html'),
    providers: [PagesService]
})
export class PageComponent implements OnInit, OnDestroy {
    public page: any = {};
    private sub: any;
    
    constructor(private route: ActivatedRoute, private pagesService: PagesService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];

            this.pagesService.getPage(id).subscribe(
                data => {
                    console.log(data[0]);
                    this.page = data[0]
                },
                error => console.log('error')
            );
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}