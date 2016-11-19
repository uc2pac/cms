import {Component} from '@angular/core';

@Component({
    selector: 'page-sidebar',
    template: require('./sidebar.html')
})
export class SidebarComponent {
    openInModal(event) {
        event.preventDefault();
    }
}