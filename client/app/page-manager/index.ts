import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageListComponent } from './list/list';
import { PageComponent } from './page/page';
import { AddPageComponent } from './addPageForm/addPageForm';

const routes: Routes = [{
    path: 'page-manager', component: PageListComponent
}, {
    path: 'pages/:id', component: PageComponent
}];

@NgModule({
    declarations: [
        PageListComponent,
        PageComponent,
        AddPageComponent
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
