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
    private subscription: any;
    
    constructor(private route: ActivatedRoute, private pagesService: PagesService) {}

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            let id = params['id'];

            this.pagesService.getPage(id).subscribe(
                data => this.page = data[0],
                error => console.log('error')
            );
        });
    }

    updatePage() {
        let body = {
            title: this.page.title,
            content: this.page.content
        };

        this.pagesService.updatePage(this.page._id, body).subscribe(
            page => this.page = page,
            error => console.log('error')
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}