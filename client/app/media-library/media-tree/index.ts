import {Component, Input, OnInit} from '@angular/core';

import {MediaLibraryService} from '../services/media-library-service';

@Component({
    selector: 'media-tree',
    template: require('./tree.html') ,
    providers: [MediaLibraryService]
})
export class MediaTreeComponent implements OnInit {
    private currentFolder: any;
    public media: any[];
    public folderName: string;
    public crumbs: String;

    @Input() root;

    constructor(private mediaLibraryService: MediaLibraryService) {}

    ngOnInit() {
        this.getResources(`/${this.root}`);
    }

    getResources(resource) {
        let path = this.createPath(resource);
        
        this.mediaLibraryService.getResources(path).subscribe(
            data => {
                this.media = data;
                this.currentFolder = resource;
                this.crumbs = path;
            },
            err => console.log(err)
        );
    }

    addFolder() {
        let metadata = {
            name: this.folderName,
            type: 'folder',
            path: this.createPath(this.currentFolder)
        };
        
        this.mediaLibraryService.addResource(metadata).subscribe(
            data => this.media.push(data),
            err => console.log(err)
        );
    }

    private createPath(resource): String {
        if (typeof resource === 'string') return resource;

        return (resource.path === '/') ? `/${resource.name}` : `${resource.path}/${resource.name}`;
    }
}