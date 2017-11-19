import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Router } from '@angular/router';

@Component({
    selector: 'blog-admin-page',
    templateUrl: 'blogAdmin.component.html'
})

export class BlogAdminComponent implements OnInit {
    posts:Blog[];
    constructor(private crudService:CrudService, private router:Router) { }

    ngOnInit() { 
        this.crudService.readAll('blogPosts').subscribe((resp)=>{
            this.posts = resp;
        },(error)=>{
            console.error("Toast burnt!");//TODO:add toastr            
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
            console.log("Toast popped!");//TODO:add toastr
            this.crudService.readAll('blogPosts').subscribe((resp)=>{
                this.posts = resp;
            },(error)=>{
                console.error("Toast burnt!");//TODO:add toastr            
            });
        },(error)=>{
            console.error("Toast burnt!");//TODO:add toastr
        });
    };
}