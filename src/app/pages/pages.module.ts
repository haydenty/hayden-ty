import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliateDisclosureComponent } from './affiliateDisclosure/affiliateDisclosure.component';
import { HtGearBlogFeedComponent } from './blogFeeds/htGearBlogFeed/htGearBlogFeed.component';
import { DevTalkBlogFeedComponent } from './blogFeeds/devTalkBlogFeed/devTalkBlogFeed.component';

@NgModule({
    imports: [
        NgbModule,
        SharedModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent,
        PageNotFoundComponent,
        ShopComponent,
        AffiliateDisclosureComponent,
        DevTalkBlogFeedComponent,
        HtGearBlogFeedComponent
    ],
    declarations: [
        HomeComponent,
        PageNotFoundComponent,
        ShopComponent,
        AffiliateDisclosureComponent,
        DevTalkBlogFeedComponent,
        HtGearBlogFeedComponent
    ],
    providers: [],
})
export class PagesModule { }
