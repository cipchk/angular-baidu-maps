import { Directive, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { AbmConfig } from './abm.config';
import { LoaderService } from './loader.service';

@Directive()
export abstract class AbmBaseComponent implements OnInit, OnChanges, OnDestroy {
  protected destroy$ = new Subject<void>();
  @Input() options!: any;
  @Output() ready = new EventEmitter<any>();
  protected map!: any;
  config!: AbmConfig;

  abstract defaultOptions(): any;

  abstract create(): void;

  abstract destroy(): void;

  constructor(protected el: ElementRef<HTMLElement>, protected COG: AbmConfig, protected zone: NgZone, protected loader: LoaderService) {
    this.config = {
      apiProtocol: 'auto',
      apiVersion: '3.0',
      apiCallback: 'angularBaiduMapsLoader',
      apiHostAndPath: 'api.map.baidu.com/api',
      ...COG,
    };
  }

  private _updateOptions(): void {
    this.options = { ...this.defaultOptions(), ...this.options };
    const map = this.map as any;
    if (map && map.setOptions) {
      map.setOptions(this.options);
    }
  }

  private _initMap(): void {
    if (this.map) {
      return;
    }

    this.loader
      .load()
      .then(() => {
        this.zone.runOutsideAngular(() => this.create());
        this.ready.emit(this.map);
      })
      .catch((error: Error) => {
        console.warn('js加载失败', error);
      });
  }

  private _getSrc(): string {
    let protocol: string;
    const { apiProtocol, apiHostAndPath, apiVersion, apiKey, apiCallback } = this.config;
    switch (apiProtocol) {
      case 'http':
        protocol = 'http:';
        break;
      case 'https':
        protocol = 'https:';
        break;
      case 'file':
        protocol = 'file:';
        break;
      default:
        protocol = '';
        break;
    }
    const queryParams: { [key: string]: string | string[] } = {
      v: apiVersion!,
      ak: apiKey!,
      callback: apiCallback!,
    };
    const params: string = Object.keys(queryParams)
      .filter((k: string) => queryParams[k] != null)
      .filter((k: string) => {
        return !Array.isArray(queryParams[k]) || (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
      })
      .map((k: string) => {
        const i = queryParams[k];
        if (Array.isArray(i)) {
          return { key: k, value: i.join(',') };
        }
        return { key: k, value: i };
      })
      .map((entry: { key: string; value: string }) => {
        return `${entry.key}=${entry.value}`;
      })
      .join('&');
    return `${protocol}//${apiHostAndPath}?${params}`;
  }

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

  ngOnDestroy(): void {
    this.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
