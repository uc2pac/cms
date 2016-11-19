import {Component} from '@angular/core';

import {MediaLibraryService} from '../services/media-library-service';

@Component({
    selector: 'media-tree',
    template: require('./tree.html') ,
    providers: [MediaLibraryService]   
})
export class MediaTreeComponent {
    private media: any;

    constructor(private mediaLibraryService: MediaLibraryService) {

    }

    addFolder() {
        this.mediaLibraryService.addResource('images', '').subscribe(
            data => this.media.push(data),
            err => console.log(err)
        );
    }
}