import { NgModule } from '@angular/core';
import { SocialMediaIconBarComponent } from './components/socialMediaIconBar/socialMediaIconBar.component';

import { CommonModule } from '@angular/common';
import { InstagramFeedComponent } from './components/instagramFeed/instagramFeed.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogFeedComponent } from './components/blogFeed/blogFeed.component';
import { CrudService } from './services/crud.service';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent,
        BlogFeedComponent
    ],
    declarations: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent,
        BlogFeedComponent
    ],
    providers: [
        CrudService
    ],
})
export class SharedModule { }
