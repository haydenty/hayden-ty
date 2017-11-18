import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
    selector: 'app-devtalk-blog-feed',
    templateUrl: '../blogFeed.component.html'
})

export class DevTalkBlogFeedComponent implements OnInit {
    blogs:Blog[];
    constructor(private blogService:BlogService) { }

    ngOnInit() { 
        this.blogService.getBlogs().subscribe(resp=>this.blogs=resp);
    }
}