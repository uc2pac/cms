import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PagesService} from '../pagesService';

@Component({
    selector: 'pages-list',
    template: require('./list.html'),
    providers: [PagesService]
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
}