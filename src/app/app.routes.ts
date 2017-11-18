import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AffiliateDisclosureComponent } from './pages/affiliateDisclosure/affiliateDisclosure.component';
import { DevTalkBlogFeedComponent } from './pages/blogFeeds/devTalkBlogFeed/devTalkBlogFeed.component';
import { HtGearBlogFeedComponent } from './pages/blogFeeds/htGearBlogFeed/htGearBlogFeed.component';


export const routes: Routes = [
    {
        path:'affil',
        component: AffiliateDisclosureComponent
    },
    {
        path:'devtalk',
        component: DevTalkBlogFeedComponent //TODO:child routes for each blog post
    },
    {
        path:'gear',
        component: HtGearBlogFeedComponent //TODO:child routes for each blog post
    },
    {
        path:'shop',
        component: ShopComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

