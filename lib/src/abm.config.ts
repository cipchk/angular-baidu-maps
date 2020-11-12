export class AbmConfig {
  /**
   * APP KEY 必填项
   */
  apiKey?: string;

  /**
   * 默认：api.map.baidu.com/api
   */
  apiHostAndPath?: string;

  /**
   * API异步加载回调函数名
   */
  apiCallback?: string;

  /**
   * API版本号，默认：2.0
   */
  apiVersion?: string;

  /**
   * API 请求协议
   */
  apiProtocol?: 'http' | 'https' | 'file' | 'auto';

  /**
   * 默认地图配置项，等同于[MapOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a0b1)
   */
  mapOptions?: any;

  /**
   * 默认全景配置项，等同于[PanoramaOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b1)
   */
  panoramaOptions?: any;
}
