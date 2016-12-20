import {Component, Input} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'media-file',
    template: require('./file.html'),
    providers: [NgbModal]
})
export class FileComponent {
    private modalElement;

    @Input() resource;

    constructor(private modalService: NgbModal) {
    
    }

    openFile(content) {
        const modalRef = this.modalService.open(content);
    }
}