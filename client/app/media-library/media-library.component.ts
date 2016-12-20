import {Component, OnInit} from '@angular/core';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'media-library',
    template: require('./media-library.html'),
    providers: [NgbTabsetConfig]
})
export class MediaLibraryComponent {
    public baseDirectories: any = ['Images', 'Videos', 'Music'];
}