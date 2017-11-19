import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';

@Component({
    selector: 'app-devtalk-blog-feed',
    templateUrl: '../blogFeed.component.html'
})

export class DevTalkBlogFeedComponent implements OnInit {
    blogs:Blog[];
    constructor(private blogService:CrudService) { }

    ngOnInit() { 
        this.blogService.readAll('blogPosts').subscribe(resp=>this.blogs=resp);
    }
}