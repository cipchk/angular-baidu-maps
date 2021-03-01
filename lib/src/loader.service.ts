import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AbmConfig } from './abm.config';

@Injectable()
export class LoaderService {
  private _scriptLoadingPromise?: Promise<void>;
  private _cog!: AbmConfig;
  constructor(cog: AbmConfig, @Inject(DOCUMENT) private doc: any) {
    this._cog = {
      apiProtocol: 'auto',
      apiVersion: '3.0',
      apiCallback: 'angularBaiduMapsLoader',
      apiHostAndPath: 'api.map.baidu.com/api',
      ...cog,
    };
  }

  load(): Promise<void> {
    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }

    this._scriptLoadingPromise = new Promise<void>((resolve: () => void, reject: () => void) => {
      this.loadScript(this._getSrc(), this._cog.apiCallback)
        .then(() => {
          const libs = this._cog.libraries || [];
          if (libs.length === 0) {
            return Promise.resolve();
          }
          return Promise.all(libs.map((src) => this.loadScript(src))).then(() => Promise.resolve());
        })
        .then(resolve)
        .catch(reject);
    });

    return this._scriptLoadingPromise;
  }

  private loadScript(src: string, callback?: string): Promise<void> {
    const script = this.doc.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = src;

    const res = new Promise<void>((resolve: () => void, reject: (error: Event) => void) => {
      script.onload = () => {
        if (callback) {
          (window as any)[callback] = () => {
            resolve();
          };
        } else {
          resolve();
        }
      };

      script.onerror = (error: Event) => {
        reject(error);
      };
    });

    this.doc.body.appendChild(script);
    return res;
  }

  private _getSrc(): string {
    let protocol: string;
    const { apiProtocol, apiVersion, apiKey, apiCallback, apiHostAndPath } = this._cog;
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
}
