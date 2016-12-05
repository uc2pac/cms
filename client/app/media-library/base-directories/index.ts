import {Component, OnInit} from '@angular/core';

import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'base-directories',
    template: require('./base-directories.html'),
    providers: [NgbTabsetConfig]
})
export class BaseDirectoriesComponent {
    public baseDirectories: any = ['Images', 'Videos', 'Music'];
}