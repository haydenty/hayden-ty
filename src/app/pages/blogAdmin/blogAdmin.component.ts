import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'blog-admin-page',
    templateUrl: 'blogAdmin.component.html'
})

export class BlogAdminComponent implements OnInit {
    blogNames:any[] = appConstants.blogNames;    
    belongsToBlogName:string = '';
    posts:Blog[];
    constructor(private crudService:CrudService, private route: ActivatedRoute, private router:Router, private toastr:ToastrService) { }

    ngOnInit() { 
        this.route.params.subscribe((params)=>{
            const blogName = params['belongsToBlogName'];
            if(blogName){
                this.belongsToBlogName = blogName;
            }
            this.crudService.readAll('blogPosts'+ this.belongsToBlogName).subscribe((resp)=>{
                this.posts = resp;
            },(error)=>{
                this.toastr.error(error,"Failed to retrieve blog posts!");          
            });
        });
        
    }
    public createNewPost(){
        this.router.navigateByUrl(this.router.url + '/-1' + '/' + this.belongsToBlogName);        
    }
    public editPost(id:number){
        this.router.navigateByUrl(this.router.url + '/' + id + '/' + this.belongsToBlogName);
    };
    public deletePost(id:number){
        this.crudService.delete('blogPosts' + this.belongsToBlogName, id).subscribe((resp)=>{
            this.toastr.success('Successfully deleted blog post.');
            this.crudService.readAll('blogPosts' + this.belongsToBlogName).subscribe((resp)=>{
                this.posts = resp;
            },(error)=>{
                this.toastr.error(error,"Failed to retrieve blog posts!");                          
            });
        },(error)=>{
            this.toastr.error(error,"Failed to delete blog post!");                          
        });
    };
    public belongsToBlogNameChanged(){
        this.crudService.readAll('blogPosts'+ this.belongsToBlogName).subscribe((resp)=>{
            this.posts = resp;
        },(error)=>{
            this.toastr.error(error,"Failed to retrieve blog posts!");          
        });
    }
}