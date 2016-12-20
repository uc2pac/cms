import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { CategoryListComponent } from './category-list/category-list';
import { CategoryComponent } from './category/category';

const routes: Routes = [
    {path: 'categories', component: CategoryListComponent},
    {path: 'categories/:id', component: CategoryComponent}
];

@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryComponent
    ],
    providers: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgbModule,
        RouterModule.forRoot(routes)
    ]
})
export class CategoryManagementModule {
}
