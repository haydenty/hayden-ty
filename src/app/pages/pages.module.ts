import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliateDisclosureComponent } from './affiliateDisclosure/affiliateDisclosure.component';
import { HtGearBlogFeedComponent } from './blogFeeds/htGearBlogFeed/htGearBlogFeed.component';
import { DevTalkBlogFeedComponent } from './blogFeeds/devTalkBlogFeed/devTalkBlogFeed.component';
import { RedirectComponent } from './redirect/redirect.component';
import { BlogAdminComponent } from './blogAdmin/blogAdmin.component';
import { BlogEditComponent } from './blogEdit/blogEdit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        NgbModule,
        SharedModule,
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent,
        PageNotFoundComponent,
        RedirectComponent,
        AffiliateDisclosureComponent,
        DevTalkBlogFeedComponent,
        HtGearBlogFeedComponent,
        BlogAdminComponent,
        BlogEditComponent
    ],
    declarations: [
        HomeComponent,
        PageNotFoundComponent,
        RedirectComponent,
        AffiliateDisclosureComponent,
        DevTalkBlogFeedComponent,
        HtGearBlogFeedComponent,
        BlogAdminComponent,
        BlogEditComponent
    ],
    providers: [],
})
export class PagesModule { }
