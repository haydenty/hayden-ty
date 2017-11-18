import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliateDisclosureComponent } from './affiliateDisclosure/affiliateDisclosure.component';
import { DevTalkBlogFeedComponent } from './devTalkBlogFeed/devTalkBlogFeed.component';
import { HttpClientModule } from '@angular/common/http';

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
        DevTalkBlogFeedComponent
    ],
    declarations: [
        HomeComponent,
        PageNotFoundComponent,
        ShopComponent,
        AffiliateDisclosureComponent,
        DevTalkBlogFeedComponent
    ],
    providers: [],
})
export class PagesModule { }
