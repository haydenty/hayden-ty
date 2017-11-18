import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),    
    BrowserModule,
    SharedModule,
    PagesModule,
    RouterModule.forRoot(routes,{useHash:false})
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
