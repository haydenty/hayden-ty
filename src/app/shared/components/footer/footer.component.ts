import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from '../socialMediaIconBar/socialMediaIcon';

@Component({
    selector: 'shared-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    @Input() icons:SocialMediaIcon[];    
}