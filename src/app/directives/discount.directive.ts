import {Directive, ElementRef} from "@angular/core";

@Directive({ selector: '[discount]' })
export class DiscountDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.webkitTextFillColor = 'red';
        el.nativeElement.style.fontWeight = 'bold';
    }
}