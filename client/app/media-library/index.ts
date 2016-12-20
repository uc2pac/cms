import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { MediaLibraryComponent } from './media-library.component';
import { MediaTreeComponent } from './media-tree';
import { FolderComponent } from './media-folder';
import { FileComponent } from './media-file';
import { BreadcrumbsComponent } from '../common/components/breadcrumbs';

const routes: Routes = [
    {path: 'media-library', component: MediaLibraryComponent}
];

@NgModule({
    declarations: [
        MediaLibraryComponent,
        MediaTreeComponent,
        FolderComponent,
        FileComponent,
        BreadcrumbsComponent
    ],
    providers: [],
    imports: [
        NgbModule,
        FileUploadModule,
        FormsModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class MediaLibraryModule {
}
