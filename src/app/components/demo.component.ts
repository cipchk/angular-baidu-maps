import { Component, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { AbmComponent } from 'angular-baidu-maps';

declare const BMap: any;
declare const BMapLib: any;
declare const BMAP_SATELLITE_MAP: any;

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnDestroy {
  options: any = {};
  bMapLibOptions: any = {};
  status = '';
  @ViewChild('map') mapComp!: AbmComponent;

  private _map: any;

  // 卫星
  satelliteOptions: any;
  onReady(map: any): void {
    this._map = map;
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity('北京');
    map.enableScrollWheelZoom(true);
    this.status = '加载完成';
    // 添加监听事件
    map.addEventListener('tilesloaded', () => {
      this.status = '地图加载完毕';
    });
    map.addEventListener('click', this._click.bind(this));
  }

  _click(e: any): void {
    this.status = `${e.point.lng}, ${e.point.lat}, ${+new Date()}`;
  }

  panTo(): void {
    this._map.panTo(new BMap.Point(116.404, 39.715));
  }

  zoom(): void {
    this._map.setZoom((this._map.getZoom() + 1) % 17);
  }

  infoWindow(): void {
    const infoWin = new BMap.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', {
      width: 200, // 信息窗口宽度
      height: 100, // 信息窗口高度
      title: '海底捞王府井店', // 信息窗口标题
      enableMessage: true, // 设置允许信息窗发送短息
      message: '亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~',
    });
    this._map.openInfoWindow(infoWin, this._map.getCenter());
  }
  onReadySatellite(map: any): void {
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.setMapType(BMAP_SATELLITE_MAP);
  }

  onReadyBMapLib(map: any): void {
    map.centerAndZoom('重庆', 12);
    const myDrag = new BMapLib.RectangleZoom(map, {
      followText: '拖拽鼠标进行操作',
    });
    myDrag.open(); // 开启拉框放大
  }

  ngOnDestroy(): void {
    this._map.removeEventListener('click', this._click.bind(this));
  }
}
