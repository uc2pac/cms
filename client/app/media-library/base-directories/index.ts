import {Component, OnInit} from '@angular/core';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

import {MediaLibraryService} from '../services/media-library-service';

@Component({
    selector: 'base-directories',
    template: require('./base-directories.html'),
    providers: [MediaLibraryService, NgbTabsetConfig]
})
export class BaseDirectoriesComponent implements OnInit {
    public baseDirectories: any = [];

    constructor(private mediaLibraryService: MediaLibraryService) {

    }

    ngOnInit() {
        this.getBaseDirectories();
    }

    getBaseDirectories() {
        this.mediaLibraryService.getBaseDirectories().subscribe(
            data => this.baseDirectories = data,
            error => console.log('error')
        )
    }
}