import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'shared-blog-feed',
    templateUrl: 'blogFeed.component.html'
})

export class BlogFeedComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
    @Input() blogs:Blog[];
    public continueReading(url){
        this.router.navigateByUrl(url);
    }
}