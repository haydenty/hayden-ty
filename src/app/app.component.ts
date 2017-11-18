import { Component } from '@angular/core';
import { SocialMediaIcon } from './shared/components/socialMediaIconBar/socialMediaIcon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  icons:SocialMediaIcon[] = [
    {
        link: 'http://instagram.com/haydenty1',
        title: 'Follow me on Instagram!',
        plateform: 'ig',
        isAnimated: false
    },
    {
        link: 'http://bit.ly/2icSqnt',
        title: 'Subscribe to my channel on YouTube!',
        plateform: 'youtube',
        isAnimated: false
    },
    {
        link: 'http://bit.ly/2cxktcJ',
        title: 'Follow me on Twitter!',
        plateform: 'twitter',
        isAnimated: false
    },
    {
        link: 'http://bit.ly/2jgAk0V',
        title: 'Connect with me on LinkedIn',
        plateform: 'linkedIn',
        isAnimated: false
    },
    {
        link: 'http://bit.ly/2d5R5ui',
        title: 'Follow me on GitHub!',
        plateform: 'github',
        isAnimated: false
    },
    {
        link: 'https://www.facebook.com/haydenty',
        title: 'Follow me on Facebook!',
        plateform: 'facebook',
        isAnimated: false
    },
    {
        link: 'https://haydenty1.wixsite.com/shop',
        title: 'Shop my store!',
        plateform: 'shop',
        isAnimated: true
    },
];
}
