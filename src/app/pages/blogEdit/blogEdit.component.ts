import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../shared/services/crud.service';

@Component({
    selector: 'blog-edit-page',
    templateUrl: 'blogEdit.component.html'
})

export class BlogEditComponent implements OnInit {
    isNewPost: boolean = true;
    post: Blog = {
        _id: -1,
        title1:'',
        title2:'',
        body:'',
        imgSrc:'',
        imgText:'',
        continueReadingLink:'',
        publishedDate: undefined
    };
    constructor(private route: ActivatedRoute, private router:Router, private blogService: CrudService) { };

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            if (id != -1) {
                this.isNewPost = false;
                this.blogService.read('blogPosts', id).subscribe((resp) => {
                    this.post = <Blog>resp[0];
                }, (error) => {
                    console.error("Toast burnt!");//TODO:add toastr                            
                });
            }
        });
    }
    public savePost() {
        if (this.isNewPost) {
            this.post.publishedDate = new Date();
            this.blogService.create('blogPosts', this.post).subscribe((resp) => {
                console.error("Toast yum!");//TODO:add toastr    
                this.isNewPost = false;
                this.post._id = resp._id;
                //TODO:change the route                        
            }, (error) => {
                console.error("Toast burnt!");//TODO:add toastr                                            
            });
        }
        else {
            this.blogService.update('blogPosts', this.post._id, this.post).subscribe((resp) => {
                console.error("Toast yum!");//TODO:add toastr                                            
            }, (error) => {
                console.error("Toast burnt!");//TODO:add toastr                                            
            });
        }
    }
    public deletePost(){
        this.blogService.delete('blogPosts', this.post._id).subscribe((resp) => {
            console.error("Toast yum!");//TODO:add toastr
            this.router.navigateByUrl('/blogadmin');                                          
        }, (error) => {
            console.error("Toast burnt!");//TODO:add toastr                                            
        });
    }
}