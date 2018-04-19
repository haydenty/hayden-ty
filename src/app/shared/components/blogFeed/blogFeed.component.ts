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
    public continueReading(blog){
        const url = 'blog/' + blog.belongsToBlogName + '/' + blog._id;
        this.router.navigateByUrl(url);
    }
}