import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
    selector: 'breadcrumbs',
    template: require('./breadcrumbs.html')
})
export class BreadcrumbsComponent implements OnChanges{
    public crumbs: String[];
    public lastCrumb: String;

    @Input() path;

    @Output() selectCrumb: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges() {
        if (!this.path) return;

        this.crumbs = this.path.split('/')
            .filter(chunk => chunk && chunk !== '/' );
        this.lastCrumb = this.crumbs.pop();
    }

    select(event, index) {
        event.preventDefault();
        let selectedCrumb = this.crumbs.slice(0, index + 1).map(crumb => `/${crumb}`).join('');
        this.selectCrumb.emit(selectedCrumb);
    }
}