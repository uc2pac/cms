import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {FileUploader } from 'ng2-file-upload/ng2-file-upload';

const BASE_URL = 'http://localhost:3333/api';

@Component({
    selector: 'media-folder',
    template: require('./folder.html'),
    styles: [`
        .thumbnail:hover {
            border: 1px solid #337ab7;
            cursor: pointer;
        }

        .thumbnail.over-drop-zone {
            border: 1px solid #337ab7;
        }
    `]
})
export class FolderComponent {
    private URL: string = `${BASE_URL}/resources`;
    private folderPath: string;
    public hasBaseDropZoneOver:boolean = false;

    public uploader:FileUploader = new FileUploader({
        url: this.URL,
        method: 'POST'
    });

    @Input() resource;

    @Output() open: EventEmitter<any> = new EventEmitter<any>();
    @Output() uploaded: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {
        this.folderPath = `${this.resource.path}/${this.resource.name}`;
        this.uploader.onSuccessItem = this.onSuccessItem.bind(this);
        this.uploader.onBuildItemForm = this.onBuildItemForm.bind(this);
    }

    openFolder() {
        this.open.emit(this.resource);
    }

    public fileDropped(e:any):void {
        this.uploader.queue[0].upload();
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    onSuccessItem(item, response, status, headers) {
        if (status && status === 200) {
            try {
                response = JSON.parse(response);
            } catch (e) {
                throw new Error('Something went wrong');
            }
            
            //this.uploaded.emit(response);
        }
    }

    onBuildItemForm(fileItem, form){ 
        form.append('path', this.folderPath); 
        return {fileItem, form};
    }
}