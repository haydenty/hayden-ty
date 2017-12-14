import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { AffiliateDisclosureComponent } from './pages/affiliateDisclosure/affiliateDisclosure.component';
import { DevTalkBlogFeedComponent } from './pages/blogFeeds/devTalkBlogFeed/devTalkBlogFeed.component';
import { HtGearBlogFeedComponent } from './pages/blogFeeds/htGearBlogFeed/htGearBlogFeed.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { BlogAdminComponent } from './pages/blogAdmin/blogAdmin.component';
import { BlogEditComponent } from './pages/blogEdit/blogEdit.component';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { CallbackComponent } from './shared/components/callback/callback.component';
import { BlogComponent } from './shared/components/blog/blog.component';


export const routes: Routes = [
    {
        path: 'blog/:id',
        component: BlogComponent
    },
    {
        path: 'blogadmin/:belongsToBlogName',
        component: BlogAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'blogadmin', //TODO: figure out this and the above route
        component: BlogAdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'blogadmin/:id/:belongsToBlogName',
        component: BlogEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'affil',
        component: AffiliateDisclosureComponent
    },
    {
        path: 'devtalk',
        component: DevTalkBlogFeedComponent //TODO:child route for each blog post
    },
    {
        path: 'gear',
        component: HtGearBlogFeedComponent //TODO:child route for each blog post
    },
    {
        path: 'shop',
        component: RedirectComponent,
        data: { redirectUrl: 'https://haydenty1.wixsite.com/shop' }
    },
    {
        path: 'bitcoin',
        component: RedirectComponent,
        data: { redirectUrl: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.coinbase.com%2Fjoin%2F59f40aa3c308a500dc014da9&h=ATNnHUAxTeFrMIBRD77OHJpL97JEwwxpzE5ZQZFw90y3uVh4JWNGwZ3_rad9DaMex0GutL5Oky8UYloZQjku25PDkvrlURF689NnSXBHt8fcKHmuXj551ltoPx-uY4RSTgvPGCmP7es' }
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'callback',
        component: CallbackComponent
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

