import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'blog-admin-page',
    templateUrl: 'blogAdmin.component.html'
})

export class BlogAdminComponent implements OnInit {
    posts:Blog[];
    constructor(private crudService:CrudService, private router:Router, private toastr:ToastrService) { }

    ngOnInit() { 
        this.crudService.readAll('blogPosts').subscribe((resp)=>{
            this.posts = resp;
        },(error)=>{
            this.toastr.error(error,"Failed to retrieve blog posts!");          
        });
    }
    public createNewPost(){
        this.router.navigateByUrl(this.router.url + '/-1');        
    }
    public editPost(id:number){
        this.router.navigateByUrl(this.router.url + '/' + id);
    };
    public deletePost(id:number){
        this.crudService.delete('blogPosts',id).subscribe((resp)=>{
            this.toastr.success('Successfully deleted blog post.');
            this.crudService.readAll('blogPosts').subscribe((resp)=>{
                this.posts = resp;
            },(error)=>{
                this.toastr.error(error,"Failed to retrieve blog posts!");                          
            });
        },(error)=>{
            this.toastr.error(error,"Failed to delete blog post!");                          
        });
    };
}