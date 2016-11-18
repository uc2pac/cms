import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import {PagesService} from '../pagesService';

@Component({
    selector: 'pages-list',
    template: require('./list.html'),
    providers: [PagesService, NgbDropdownConfig]
})
export class PageListComponent implements OnInit {
  public pages: any[];

  constructor(private pagesService: PagesService, private router: Router) {
    
  }

  ngOnInit() {
      this.getPages();
  }

  getPages(): void {
      this.pagesService.getPages()
          .subscribe(data => this.pages = data,
              error => console.log('error'));
  }

  deletePage(id): void {
      this.pagesService.deletePage(id)
        .subscribe(data => {
            let pageIndex = this.pages.findIndex(page => page._id === id);
            this.pages.splice(pageIndex, 1);
        });
  }
}