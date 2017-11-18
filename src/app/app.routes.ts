import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AffiliateDisclosureComponent } from './pages/affiliateDisclosure/affiliateDisclosure.component';
import { DevTalkBlogFeedComponent } from './pages/devTalkBlogFeed/devTalkBlogFeed.component';


export const routes: Routes = [
    {
        path:'affil',
        component: AffiliateDisclosureComponent
    },
    {
        path:'devtalk',
        component: DevTalkBlogFeedComponent
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

