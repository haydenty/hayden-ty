import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shop-page',
    template: ``
})

export class ShopComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        window.location.href = 'https://haydenty1.wixsite.com/shop';
    }
}