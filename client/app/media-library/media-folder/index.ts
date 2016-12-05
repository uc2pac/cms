import {Component, Input, Output, EventEmitter} from '@angular/core';

import {FileUploader } from 'ng2-file-upload/ng2-file-upload';

const BASE_URL = 'http://localhost:3333/api';

@Component({
    selector: 'media-folder',
    template: require('./folder.html')    
})
export class FolderComponent {
    private URL: string = `${BASE_URL}/directories`;
    public hasBaseDropZoneOver:boolean = false;
    public uploader:FileUploader = new FileUploader({
        url: this.URL,
        method: 'post',
        headers: [{
            name: 'type',
            value: 'file'    
        }]
    });

    @Input() resource;

    @Output() open: EventEmitter<any> = new EventEmitter<any>();

    openFolder() {
        this.open.emit(this.resource);
    }

    public fileDropped(e:any):void {
        this.uploader.uploadAll();
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }
}