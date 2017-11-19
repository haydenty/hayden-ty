import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: '[shared-header]',
    templateUrl: 'header.component.html',
    styleUrls:['header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(private auth0:AuthService){}  
    ngOnInit(): void {}
    public login():void{
        this.auth0.login();
    }
    public logout():void{
        this.auth0.logout();
    }
}