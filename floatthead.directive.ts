import {Directive, AfterViewInit, ElementRef} from '@angular/core';

declare var jQuery: any;
require('floatthead/dist/jquery.floatThead.js');

@Directive({
    selector: '[floatthead]'
})
export class FloatThead implements AfterViewInit {
    $el: any;

    constructor(private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        this.$el = jQuery(this.elementRef.nativeElement);
        // I used window scroll event so the floathead will only 
        // show on window scroll with pageYOffset > 100
        // because, floathead reflow only on window resize but not on table resize
        window.addEventListener('scroll', (e) => {
          if (window.pageYOffset > 100) {
            this.$el.floatThead({
              position: 'fixed',
            });
          } else {
            this.$el.floatThead('destroy');
          }
        });
    }
    
    ngOnDestroy() {
        window.removeEventListener('scroll');
    }
}
