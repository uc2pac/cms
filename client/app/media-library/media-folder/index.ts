import {Component} from '@angular/core';

@Component({
    selector: 'media-folder',
    template: `<div class="folder">{{name}}</div>`    
})
export class FolderComponent {
    public name: string = 'Folder name';
}