import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'blog-shared',
    templateUrl: 'blog.component.html'
})

export class BlogComponent implements OnInit {
    blog: Blog = {
        _id: -1,
        belongsToBlogName: '',
        title1: '',
        title2: '',
        body: '',
        imgSrc: '',
        imgText: '',
        continueReadingLink: '',
        publishedDate: null
    };

    constructor(private route: ActivatedRoute, private blogService: CrudService, private toastr: ToastrService) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const belongsToBlogName = params['belongsToBlogName'];
            const id = params['id'];
            this.blogService.read('blogPosts' + belongsToBlogName, id).subscribe((resp) => {
                this.blog = resp[0];
            }, (error) => {
                this.toastr.error(error, "Failed to retrieve blog post!");
            });
        });
    }
}