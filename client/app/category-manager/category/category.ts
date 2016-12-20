import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import {CategoryService} from '../category.service';

@Component({
    selector: 'category',
    template: require('./category.html'),
    providers: [CategoryService, NgbDropdownConfig]
})
export class CategoryComponent implements OnInit {
  public category: any = {};
  private subscription: any;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
    
  }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(params => {
          let id = params['id'];

          this.categoryService.getCategory(id).subscribe(
              data => this.category = data[0],
              error => console.log('error')
          );
      });
  }

  updatePage() {
        let body = {
            title: this.category.title
        };

        this.categoryService.updateCategory(this.category._id, body).subscribe(
            category => this.category = category,
            error => console.log('error')
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}