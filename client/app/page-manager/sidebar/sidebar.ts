import {Component, OnInit, Input} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {PagesService} from '../pagesService';
import {CategoryService} from '../../category-manager/category.service';

import {ImageLibraryComponent} from '../../common/components/media-library';

@Component({
    selector: 'page-sidebar',
    template: require('./sidebar.html'),
    providers: [PagesService, CategoryService, NgbModal]
})
export class SidebarComponent {
    @Input() page: any;

    public categories: any[];

    constructor(private categoryService: CategoryService, 
                private pageService: PagesService, 
                private modalService: NgbModal) {

    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
      this.categoryService.getCategories()
          .subscribe(data => this.categories = data,
              error => console.log('error'));
    }

    updatePage() {
        let body = {
            category: this.page.category
        };

        this.pageService.updatePage(this.page._id, body).subscribe(
            page => this.page = page,
            error => console.log('error')
        );
    }

    openMediaLibrary(event) {
        event.preventDefault();

        this.modalService.open(ImageLibraryComponent, {size: 'lg'}).result.then((result) => {
            console.log(result);
        }, (reason) => {
            
        });
    }
}