import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-devtalk-blog-feed',
    templateUrl: '../blogFeed.component.html'
})

export class DevTalkBlogFeedComponent implements OnInit {
    blogs: Blog[];
    constructor(private blogService: CrudService, private toastr:ToastrService) { }

    ngOnInit() {
        this.blogService.readAll('blogPostsdev').subscribe((resp) => { 
            this.blogs = resp; 
            //this.toastr.success(JSON.stringify(resp));
        }, (error)=>{
            this.toastr.error(error, "Failed to retrieve blog posts!");
        });
    }
}