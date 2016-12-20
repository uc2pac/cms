import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import {Router} from '@angular/router';

import {PagesService} from '../pagesService';

@Component({
    selector: 'add-page-form',
    template: require('./addPageForm.html'),
    providers: [PagesService],
    animations: [trigger(
        'slideDown', [
            state('collapsed, void', style({height: '0px'})),
            state('expanded', style({height: '*'})),
            transition('collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
        ]
    )]
})
export class AddPageComponent {
    public state: boolean = false;
    public title: string = '';

    constructor(private pagesService: PagesService, private router: Router) {

    }

    // add new page
    addPage = function(): void {
        this.pagesService.addPage(this.title).subscribe(page => this.router.navigate([`/pages/${page._id}`]));
    }
}