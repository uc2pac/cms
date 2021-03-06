import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { PageListComponent } from './list/list';
import { PageComponent } from './page/page';
import { SidebarComponent } from './sidebar/sidebar';
import { AddPageComponent } from './addPageForm/addPageForm';

const routes: Routes = [
    {path: 'page-manager', component: PageListComponent}, 
    {path: 'pages/:id', component: PageComponent}
];

@NgModule({
    declarations: [
        PageListComponent,
        PageComponent,
        SidebarComponent,
        AddPageComponent
    ],
    providers: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes)
    ]
})
export class PagesManagementModule {
}
