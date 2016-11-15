import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pages-list',
    template: require('./list.html')
})
export class PagesListComponent { 
  public pages: any[];

  constructor() {
    this.pages = [{
      name: 'Page 1'
    }, {
      name: 'Page 2'
    }];
  }

  // add new page
  addPage = function() : void {
    this.pages.push({
      name: 'new page'
    });
  }
}