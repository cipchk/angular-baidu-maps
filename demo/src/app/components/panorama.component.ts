/* tslint:disable */
import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AbmPanoramaComponent } from 'angular-baidu-maps';

declare const BMap: any;

@Component({
    selector: 'panorama',
    templateUrl: './panorama.component.html',
    styleUrls: ['./panorama.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DemoPanoramaComponent {

    options: any = {}
    @ViewChild('map') map: AbmPanoramaComponent;

    constructor(private el: ElementRef) { }

    onReady(map: any) {
        map.setPosition(new BMap.Point(116.321463, 39.984738));
        map.setPov({ pitch: 6, heading: 138 });
    }
}
