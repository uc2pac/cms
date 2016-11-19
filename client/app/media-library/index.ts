import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { BaseDirectoriesComponent } from './base-directories';
import { MediaTreeComponent } from './media-tree';
import { FolderComponent } from './media-folder';

const routes: Routes = [
    {path: 'media-library', component: BaseDirectoriesComponent}
];

@NgModule({
    declarations: [
        BaseDirectoriesComponent,
        MediaTreeComponent,
        FolderComponent
    ],
    providers: [],
    imports: [
        NgbModule,
        RouterModule.forRoot(routes)
    ]
})
export class MediaLibraryModule {
}
