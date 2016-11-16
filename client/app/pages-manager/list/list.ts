import {Component, OnInit} from '@angular/core';

import {PagesService} from '../pagesService';

@Component({
    selector: 'pages-list',
    template: require('./list.html'),
    providers: [PagesService]
})
export class PagesListComponent implements OnInit {
  public pages: any[];

  constructor(private pagesService: PagesService) {
    
  }

  ngOnInit() {
      this.getPages();
  }

  getPages(): void {
      this.pagesService.getPages()
          .subscribe(data => this.pages = data,
              error => console.log('error'));
  }

  // add new page
  addPage = function(): void {
    console.log('hit');
    this.pagesService.addPage().subscribe(page => this.pages.push(page));
  }
}