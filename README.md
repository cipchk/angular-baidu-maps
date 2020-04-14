# angular-baidu-maps
Angular 2+ Baidu Maps Components

[![NPM version](https://img.shields.io/npm/v/angular-baidu-maps.svg)](https://www.npmjs.com/package/angular-baidu-maps)
[![Build Status](https://travis-ci.org/cipchk/angular-baidu-maps.svg?branch=master)](https://travis-ci.org/cipchk/angular-baidu-maps)


## Demo

- [Live Demo](https://cipchk.github.io/angular-baidu-maps/)
- [Stackblitz](https://stackblitz.com/edit/angular-baidu-maps)

### 1、安装

```
npm install angular-baidu-maps --save
```

把 `AbmModule` 模块导入到你项目中。

```typescript
import { AbmModule } from 'angular-baidu-maps';

@NgModule({
    imports: [
        BrowserModule,
        AbmModule.forRoot({
            apiKey: '' // app key为必选项
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2、使用

**地图组件**

```html
<abm-map #map [options]="options" (ready)="onReady($event)" style="height: 300px;"></abm-map>
```

**街景组件**

```html
<abm-panorama #map [options]="options" (ready)="onReady($event)" style="height: 500px;"></abm-panorama>
```

默认自动异步加载 js 类库，所以只需要在 NgModule 提供 api key 就可以立即使用了。 `options` 等同百度地图 `new BMap.Map(mapContainer, options)`。

## 关于事件注意点（很重要，请认真阅读）

我精力有限，而如果真要以Angular的角度去开发百度地图工作量非常大，所以放弃过度性封装。正因为如此，所以您在注册**事件**的时候还是要认真一点。

因此，我建议，当你需要注册一个地图的 `click` 事件时：

```typescript
map.addEventListener('click', this._click.bind(this));
```

与之相对应，一定要在 `ngOnDestroy` 对事件的销毁：

```typescript
ngOnDestroy(): void {
    this._map.removeEventListener('click', this._click.bind(this));
}
```

当然，这里还有一些关于**覆盖物**相关里面涉及的事件，也一并做相应的销毁处理。

**很抱歉，如果你在使用 angular-baidu-maps 的时候请认真阅读；但如果你希望一个简单又不得不在几个简单的页面中使用百度地图的话，那么这个插件会是很好的选择**。

## AqmConfig

| 名称    | 类型           | 默认值  | 描述 |
| ------- | ------------- | ----- | ----- |
| `apiKey` | `string` | - | APP KEY 必填项 |
| `apiHostAndPath` | `string` | `map.qq.com/api/js` | - |
| `apiCallback` | `string` | `angularQQMapsLoader` | API异步加载回调函数名 |
| `apiVersion` | `string` | `2.exp` | API版本号 |
| `apiProtocol` | `http,https,file,auto` | `auto` | API 请求协议 |
| `mapOptions` | `Object` | - | 默认地图配置项，等同于[MapOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b1) |
| `panoramaOptions` | `Object` | - | 默认全景配置项，等同于[PanoramaOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a8b1) |

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/cipchk/angular-baidu-maps/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/cipchk/angular-baidu-maps/blob/master/LICENSE) file for the full text)
