import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

import {CategoryService} from '../category.service';

class Category {
    _id: string;
    title: string;
    content: string;
    base_image: string;
    parent_category: string;
    created_at: any
}

@Component({
    selector: 'category-list',
    template: require('./category-list.html'),
    providers: [CategoryService, NgbDropdownConfig]
})
export class CategoryListComponent implements OnInit {
  public categories: any[];
  public title: string;
  public category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) {
    
  }

  ngOnInit() {
      this.getCategories();
  }

  addCategory(): void {
      this.categoryService.addCategory(this.category)
          .subscribe(category => this.router.navigate([`/categories/${category._id}`]),
          error => console.log('error'));
  }

  getCategories(): void {
      this.categoryService.getCategories()
          .subscribe(data => this.categories = data,
              error => console.log('error'));
  }

  deleteCategory(id): void {
      this.categoryService.deleteCategory(id)
        .subscribe(data => {
            let categoryIndex = this.categories.findIndex(category => category._id === id);
            this.categories.splice(categoryIndex, 1);
        });
  }
}