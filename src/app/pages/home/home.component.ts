import { Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'home-page',
    templateUrl: 'home.component.html',
    providers:[NgbCarouselConfig]
})

export class HomeComponent{
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 2000;
        config.wrap = false;
        config.keyboard = false;
      }
}