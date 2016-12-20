import {Component, OnInit} from '@angular/core';

import {NgbActiveModal, NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {MediaLibraryService} from '../../../media-library/services/media-library-service';

@Component({
    selector: 'image-library',
    template: require('./image-library.html'),
    providers: [MediaLibraryService, NgbPaginationConfig],
    styles: [`
        .media-library .thumbnail {
            height: 194px;
            line-height: 182px;
            text-align: center;
        }

        .media-library .thumbnail img {
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
            display: inline;
        }

        .media-library .thumbnail-caption {
            word-wrap: break-word;
        }
    `]
})

export class ImageLibraryComponent {
    public images: Array<any>;
    public collectionLength: number = 0;
    public page: number = 0;

    private perPage: number = 4;

    constructor(private mediaLibraryService: MediaLibraryService, public activeModal: NgbActiveModal) {

    }

    getImages() {
        let skip = (this.page - 1) * this.perPage;
        this.mediaLibraryService.getImages(this.perPage, skip).subscribe(
            data => {
                this.images = data.images;
                this.collectionLength = data.count;
            },
            err => console.log(err)
        );
    }

    pageChanged(page) {
        this.page = page;
        this.getImages();
    }
}