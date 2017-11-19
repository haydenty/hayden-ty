import { NgModule } from '@angular/core';
import { SocialMediaIconBarComponent } from './components/socialMediaIconBar/socialMediaIconBar.component';

import { CommonModule } from '@angular/common';
import { InstagramFeedComponent } from './components/instagramFeed/instagramFeed.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogFeedComponent } from './components/blogFeed/blogFeed.component';
import { CrudService } from './services/crud.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './services/auth/auth-guard.service';
import { CallbackComponent } from './components/callback/callback.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthHttpInterceptor } from './services/auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent,
        BlogFeedComponent,
        CallbackComponent,
        ProfileComponent
    ],
    declarations: [
        SocialMediaIconBarComponent,
        InstagramFeedComponent,
        FooterComponent,
        HeaderComponent,
        BlogFeedComponent,
        CallbackComponent,
        ProfileComponent
    ],
    providers: [
        AuthService,
        CrudService,
        AuthGuard,
        {
            provide:HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi:true
        }
    ],
})
export class SharedModule { }
