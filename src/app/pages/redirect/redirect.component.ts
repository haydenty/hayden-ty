import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'redirect-page',
    template: ``
})

export class RedirectComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.route.data.subscribe(r=>{
            window.location.href = r.redirectUrl;           
        });
    }
}