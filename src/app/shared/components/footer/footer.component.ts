import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from '../socialMediaIconBar/socialMediaIcon';

@Component({
    selector: 'shared-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    @Input() icons:SocialMediaIcon[];
    currentPage:string;
    constructor(){
        this.currentPage = window.location.pathname.substr(1);
    } 
}