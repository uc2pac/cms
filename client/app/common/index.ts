import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { BreadcrumbsComponent } from './components/breadcrumbs';
import { ImageLibraryComponent } from './components/media-library';

@NgModule({
    declarations: [
        //BreadcrumbsComponent
        ImageLibraryComponent
    ],
    providers: [],
    entryComponents: [ImageLibraryComponent],
    imports: [
        NgbModule,
        FormsModule,
        CommonModule
    ]
})
export class SelfCommonModule {
}
