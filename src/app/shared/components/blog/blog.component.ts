import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blog-shared',
    templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input() blog: Blog = {
        _id: -1,
        title1: 'The Main Title',
        title2: 'The Second Title',
        body: 'This is great...',
        imgSrc: '',
        imgText: '',
        continueReadingLink: '',
        publishedDate: new Date()
    };
}