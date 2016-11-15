import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesListComponent } from './list/list';

const routes: Routes = [{
    path: 'pages-manager',
    component: PagesListComponent
}];

@NgModule({
    declarations: [
        PagesListComponent
    ],
    providers: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class PagesManagementModule {
}
