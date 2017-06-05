export class AbmConfig {
    /**
     * APP KEY 必填项
     * 
     * @type {string}
     */
    apiKey: string;

    /**
     * 默认：api.map.baidu.com/api
     * 
     * @type {string}
     */
    apiHostAndPath?: string;

    /**
     * API异步加载回调函数名
     * 
     * @type {string}
     */
    apiCallback?:string;

    /**
     * API版本号，默认：2.0
     * 
     * @type {string}
     */
    apiVersion?: string;

    /**
     * API 请求协议
     * 
     * @type {('http' | 'https' | 'auto')}
     */
    apiProtocol?: 'http' | 'https' | 'auto';
    
    /**
     * 默认地图配置项，等同于[MapOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b1)
     * 
     * @type {*}
     */
    mapOptions?: any;
    
    /**
     * 默认全景配置项，等同于[PanoramaOptions 对象规范](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a8b1)
     * 
     * @type {*}
     */
    panoramaOptions?: any;
}
