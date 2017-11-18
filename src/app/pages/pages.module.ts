import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { AffiliateDisclosureComponent } from './affiliateDisclosure/affiliateDisclosure.component';

@NgModule({
    imports: [
        NgbModule,
        SharedModule
    ],
    exports: [
        HomeComponent,
        PageNotFoundComponent,
        ShopComponent,
        AffiliateDisclosureComponent
    ],
    declarations: [
        HomeComponent,
        PageNotFoundComponent,
        ShopComponent,
        AffiliateDisclosureComponent
    ],
    providers: [],
})
export class PagesModule { }
