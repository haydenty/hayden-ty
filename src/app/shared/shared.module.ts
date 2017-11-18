import { NgModule } from '@angular/core';
import { SocialMediaIconBarComponent } from './components/socialMediaIconBar/socialMediaIconBar.component';

import { CommonModule } from '@angular/common';
import { InstagramFeedComponent } from './components/instagramFeed/instagramFeed.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent
    ],
    declarations: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [],
})
export class SharedModule { }
