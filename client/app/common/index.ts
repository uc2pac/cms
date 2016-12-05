import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs';

@NgModule({
    declarations: [
        //BreadcrumbsComponent
    ],
    providers: [],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class SelfCommonModule {
}
