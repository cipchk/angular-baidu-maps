import {
  Component,
  Input,
  ElementRef,
  OnDestroy,
  EventEmitter,
  Output,
  NgZone,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';

import { LoaderService } from './loader.service';
import { AbmConfig } from './abm.config';

declare const BMap: any;

@Component({
  selector: 'abm-panorama',
  template: ``,
  styles: [
    `
      .angular-baidu-maps-container {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
  host: {
    '[class.angular-baidu-maps-container]': 'true',
  },
  encapsulation: ViewEncapsulation.None,
})
export class AbmPanoramaComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: any = {};
  @Output() ready = new EventEmitter<any>();

  private map: any = null;

  constructor(
    private el: ElementRef,
    private COG: AbmConfig,
    private loader: LoaderService,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    if (!(typeof document === 'object' && !!document)) {
      return;
    }
    this._initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('options' in changes) {
      this._updateOptions();
    }
  }

  private _initMap(): void {
    if (this.map) {
      return;
    }
    this.loader
      .load()
      .then(() => {
        this.zone.runOutsideAngular(() => {
          try {
            this.map = new BMap.Panorama(this.el.nativeElement, this.options);
          } catch (ex) {
            console.warn('全景初始化失败', ex);
          }
        });
        this.ready.emit(this.map);
      })
      .catch((error: Error) => {
        console.warn('js加载失败', error);
      });
  }

  private _updateOptions(): void {
    this.options = { ...this.COG.panoramaOptions, ...this.options };
    if (this.map) {
      this.map.setOptions(this.options);
    }
  }

  private destroy(): void {}

  ngOnDestroy(): void {
    this.destroy();
  }
}
