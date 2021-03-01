import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbmBaseComponent } from './abm-base.component';

declare const BMap: any;

@Component({
  selector: 'abm-map, [abm-map]',
  exportAs: 'abmMap',
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
export class AbmComponent extends AbmBaseComponent {
  defaultOptions(): any {
    return this.COG.mapOptions;
  }

  create(): void {
    try {
      this.map = new BMap.Map(this.el.nativeElement, this.options);
    } catch (ex) {
      console.warn('地图初始化失败', ex);
    }
  }

  destroy(): void {
    if (this.map) {
      this.map.clearOverlays();
      this.map.clearHotspots();
    }
  }
}
