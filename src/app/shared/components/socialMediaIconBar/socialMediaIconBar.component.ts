import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from './socialMediaIcon';

@Component({
    selector: 'social-media-icon-bar',
    templateUrl: 'socialMediaIconBar.component.html',
    styleUrls:['socialMediaIconBar.component.css']
})

export class SocialMediaIconBarComponent {
    @Input()public icons: SocialMediaIcon[];
    //TODO: make plateform an enum or switch statment
    //https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
    private iconClasses: IconClass[] = [
        {
            plateform: 'ig',
            class: 'fa-instagram'
        },
        {
            plateform: 'youtube',
            class: 'fa-youtube-play'
        },
        {
            plateform: 'facebook',
            class: 'fa-facebook-square'
        },
        {
            plateform: 'twitter',
            class: 'fa-twitter'
        },
        {
            plateform: 'linkedIn',
            class: 'fa-linkedin-square'
        },
        {
            plateform: 'shop',
            class: 'fa-shopping-cart'
        },
        {
            plateform: 'github',
            class: 'fa-github'
        }
    ];

    public getClass(plateform: string): string {
        let plateformClass:string = '';

        for(let i=0;i<this.iconClasses.length;i++){
            if(this.iconClasses[i].plateform === plateform){
                plateformClass = this.iconClasses[i].class;
                break;
            }
        }
        return plateformClass;
    }
}

export interface IconClass {
    plateform: string,
    class: string
}