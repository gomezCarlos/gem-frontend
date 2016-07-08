import {Component, ElementRef } from '@angular/core';
declare var componentHandler: any;


@Component({
    selector: '[mdl]',
    template: `<ng-content></ng-content>`
})



    export class MdlComponent {

    constructor(public el: ElementRef) {

        MdlComponent.mdlWrapper(el);

    }

    static mdlWrapper(element: ElementRef) {

        componentHandler.upgradeElement(element.nativeElement);
    }
}