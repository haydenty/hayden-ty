import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'callback-shared',
    templateUrl: 'callback.component.html'
})

export class CallbackComponent implements OnInit {
    constructor(private auth0:AuthService) { 
        auth0.handleAuthentication();
    }

    ngOnInit() { }
}