import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbmBaseComponent } from './abm-base.component';

declare const BMap: any;

@Component({
  selector: 'abm-panorama, [abm-panorama]',
  exportAs: 'abmPanoramaMap',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbmPanoramaComponent extends AbmBaseComponent {
  defaultOptions(): any {
    return this.COG.panoramaOptions;
  }

  create(): void {
    try {
      this.map = new BMap.Panorama(this.el.nativeElement, this.options);
    } catch (ex) {
      console.warn('全景初始化失败', ex);
    }
  }

  destroy(): void {}
}
