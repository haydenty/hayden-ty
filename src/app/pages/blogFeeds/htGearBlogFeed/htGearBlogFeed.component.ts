import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
    selector: 'app-htgear-blog-feed',
    templateUrl: '../blogFeed.component.html'
})

export class HtGearBlogFeedComponent implements OnInit {
    blogs:Blog[];
    constructor(private blogService:BlogService) { }

    ngOnInit() { 
        this.blogService.getBlogs().subscribe(resp=>this.blogs=resp);
    }
}