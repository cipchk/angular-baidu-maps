webpackJsonp([0,2],{0:function(t,n,e){t.exports=e("s7k+")},"7W0R":function(t,n,e){"use strict";var l=e("3j3K");e.d(n,"a",function(){return i});var i=function(){function t(t){this.el=t,this.options={}}return t.prototype.onReady=function(t){t.setPosition(new BMap.Point(116.321463,39.984738)),t.setPov({pitch:6,heading:138})},t.ctorParameters=function(){return[{type:l.L}]},t}()},"Db+E":function(t,n,e){"use strict";function l(t){return o._25(0,[o._31(402653184,1,{map:0}),(t()(),o._27(0,null,null,14,"div",[["class","card mb-3"]],null,null,null,null,null)),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),o._26(null,["示例"])),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,8,"div",[["class","card-block"]],null,null,null,null,null)),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,2,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),o._29(212992,null,0,u.a,[o.L],null,null),(t()(),o._26(null,['            <abm-panorama #map [options]="options" style="height: 500px;"></abm-panorama>\n        '])),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,1,"abm-panorama",[["style","height: 500px;"]],[[2,"angular-baidu-maps-container",null]],[[null,"ready"]],function(t,n,e){var l=!0,i=t.component;if("ready"===n){l=!1!==i.onReady(e)&&l}return l},a.a,a.b)),o._29(770048,[[1,4],["map",4]],0,s.a,[o.L,c.a,p.a,o.g],{options:[0,"options"]},{ready:"ready"}),(t()(),o._26(null,["\n    "])),(t()(),o._26(null,["\n"])),(t()(),o._26(null,["\n"]))],function(t,n){var e=n.component;t(n,9,0),t(n,13,0,e.options)},function(t,n){t(n,12,0,!0)})}function i(t){return o._25(0,[(t()(),o._27(0,null,null,1,"panorama",[],null,null,null,l,d)),o._29(49152,null,0,_.a,[o.L],null,null)],null,null)}var r=e("Wm+l"),o=e("3j3K"),u=e("52WS"),_=e("7W0R"),a=e("rvQE"),s=e("uC4U"),c=e("IIaX"),p=e("XsIA");e.d(n,"a",function(){return f});var h=[r.a],d=o._24({encapsulation:2,styles:h,data:{}}),f=o._30("panorama",_.a,i,{},{},[])},IIaX:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},"L/RD":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="L/RD"},NFm0:function(t,n,e){"use strict";var l=e("3j3K"),i=e("XsIA"),r=e("IIaX");e.d(n,"a",function(){return o});var o=function(){function t(t,n,e,i){this.el=t,this.COG=n,this.loader=e,this.zone=i,this.options={},this.ready=new l.R,this.map=null}return t.prototype.ngOnInit=function(){this._initMap()},t.prototype.ngOnChanges=function(t){"options"in t&&this._updateOptions()},t.prototype._initMap=function(){var t=this;this.map||this.loader.load().then(function(){t.zone.runOutsideAngular(function(){try{t.map=new BMap.Map(t.el.nativeElement,t.options)}catch(t){console.warn("地图初始化失败",t)}}),t.ready.emit(t.map)}).catch(function(t){console.warn("js加载失败",t)})},t.prototype._updateOptions=function(){this.options=Object.assign({},this.COG.mapOptions,this.options),this.map&&this.map.setOptions(this.options)},t.prototype.destroy=function(){this.map&&(this.map.clearOverlays(),this.map.clearHotspots())},t.prototype.ngOnDestroy=function(){this.destroy()},t}();o.decorators=[{type:l._20,args:[{selector:"abm-map",template:"",styles:["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],host:{"[class.angular-baidu-maps-container]":"true"},encapsulation:l._13.None}]}],o.ctorParameters=function(){return[{type:l.L},{type:r.a},{type:i.a},{type:l.g}]},o.propDecorators={options:[{type:l.M}],ready:[{type:l.V}]}},RRpH:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},Riz6:function(t,n,e){"use strict";var l=e("3j3K");e.d(n,"a",function(){return i});var i=function(){function t(t,n){this.el=t,this.zone=n,this.options={},this.status=""}return t.prototype.onReady=function(t){var n=this;this._map=t,t.centerAndZoom(new BMap.Point(116.404,39.915),11),t.addControl(new BMap.MapTypeControl),t.setCurrentCity("北京"),t.enableScrollWheelZoom(!0),this.status="加载完成",t.addEventListener("tilesloaded",function(){n.status="地图加载完毕"}),t.addEventListener("click",this._click.bind(this))},t.prototype._click=function(t){this.status=t.point.lng+", "+t.point.lat+", "+ +new Date},t.prototype.panTo=function(){this._map.panTo(new BMap.Point(116.404,39.715))},t.prototype.zoom=function(){this._map.setZoom((this._map.getZoom()+1)%17)},t.prototype.infoWindow=function(){var t=new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层",{width:200,height:100,title:"海底捞王府井店",enableMessage:!0,message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"});this._map.openInfoWindow(t,this._map.getCenter())},t.prototype.onReadySatellite=function(t){t.centerAndZoom(new BMap.Point(116.404,39.915),11),t.setMapType(BMAP_SATELLITE_MAP),this.mapSatellite=t},t.prototype.ngOnDestroy=function(){this._map.removeEventListener("click",this._click.bind(this))},t.ctorParameters=function(){return[{type:l.L},{type:l.g}]},t}()},"Wm+l":function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},XoxQ:function(t,n,e){"use strict";function l(t){return r._25(0,[(t()(),r._26(null,["\n    "])),(t()(),r._27(0,null,null,29,"nav",[["class","navbar navbar-toggleable-md navbar-light bg-faded mb-3"]],null,null,null,null,null)),(t()(),r._26(null,["\n        "])),(t()(),r._27(0,null,null,3,"button",[["aria-controls","navbarSupportedContent"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler navbar-toggler-right"],["data-target","#navbarSupportedContent"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(t()(),r._26(null,["\n            "])),(t()(),r._27(0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(t()(),r._26(null,["\n        "])),(t()(),r._26(null,["\n        "])),(t()(),r._27(0,null,null,1,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(t()(),r._26(null,["angular-baidu-maps"])),(t()(),r._26(null,["\n        "])),(t()(),r._27(0,null,null,18,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(t()(),r._26(null,["\n            "])),(t()(),r._27(0,null,null,15,"ul",[["class","navbar-nav mr-auto"]],null,null,null,null,null)),(t()(),r._26(null,["\n                "])),(t()(),r._27(0,null,null,5,"li",[["class","nav-item"]],null,null,null,null,null)),(t()(),r._26(null,["\n                    "])),(t()(),r._27(0,null,null,2,"a",[["class","nav-link"],["routerLink","/"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,n,e){var l=!0;if("click"===n){l=!1!==r._28(t,18).onClick(e.button,e.ctrlKey,e.metaKey)&&l}return l},null,null)),r._29(671744,null,0,o.y,[o.j,o.v,u.f],{routerLink:[0,"routerLink"]},null),(t()(),r._26(null,["地图"])),(t()(),r._26(null,["\n                "])),(t()(),r._26(null,["\n                "])),(t()(),r._27(0,null,null,5,"li",[["class","nav-item"]],null,null,null,null,null)),(t()(),r._26(null,["\n                    "])),(t()(),r._27(0,null,null,2,"a",[["class","nav-link"],["routerLink","/panorama"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(t,n,e){var l=!0;if("click"===n){l=!1!==r._28(t,25).onClick(e.button,e.ctrlKey,e.metaKey)&&l}return l},null,null)),r._29(671744,null,0,o.y,[o.j,o.v,u.f],{routerLink:[0,"routerLink"]},null),(t()(),r._26(null,["全景"])),(t()(),r._26(null,["\n                "])),(t()(),r._26(null,["\n            "])),(t()(),r._26(null,["\n        "])),(t()(),r._26(null,["\n    "])),(t()(),r._26(null,["\n    "])),(t()(),r._27(0,null,null,3,"p",[["class","mb-3"]],null,null,null,null,null)),(t()(),r._26(null,["Angular 2+ Baidu Maps Components，有关更多细节见"])),(t()(),r._27(0,null,null,1,"a",[["href","https://github.com/cipchk/angular-baidu-maps/blob/master/README.md"],["target","_blank"]],null,null,null,null,null)),(t()(),r._26(null,["README.md"])),(t()(),r._26(null,["\n    "])),(t()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._29(147456,null,0,o.z,[o.l,r.T,r.U,[8,null]],null,null),(t()(),r._26(null,["\n  "]))],function(t,n){t(n,18,0,"/"),t(n,25,0,"/panorama")},function(t,n){t(n,17,0,r._28(n,18).target,r._28(n,18).href),t(n,24,0,r._28(n,25).target,r._28(n,25).href)})}function i(t){return r._25(0,[(t()(),r._27(0,null,null,1,"app-root",[],null,null,null,l,s)),r._29(49152,null,0,_.a,[],null,null)],null,null)}var r=e("3j3K"),o=e("5oXY"),u=e("2Je8"),_=e("nBc1");e.d(n,"a",function(){return c});var a=[],s=r._24({encapsulation:2,styles:a,data:{}}),c=r._30("app-root",_.a,i,{},{},[])},XsIA:function(t,n,e){"use strict";var l=e("3j3K"),i=e("IIaX");e.d(n,"a",function(){return r});var r=function(){function t(t){this._cog=Object.assign({apiProtocol:"auto",apiVersion:"2.0",apiCallback:"angularBaiduMapsLoader",apiHostAndPath:"api.map.baidu.com/api"},t)}return t.prototype.load=function(){var t=this;if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var n=document.createElement("script");return n.type="text/javascript",n.async=!0,n.defer=!0,n.src=this._getSrc(),this._scriptLoadingPromise=new Promise(function(e,l){window[t._cog.apiCallback]=function(){e()},n.onerror=function(t){l(t)}}),document.body.appendChild(n),this._scriptLoadingPromise},t.prototype._getSrc=function(){var t;switch(this._cog.apiProtocol){case"http":t="http:";break;case"https":t="https:";break;default:t=""}var n={v:this._cog.apiVersion,ak:this._cog.apiKey,callback:this._cog.apiCallback},e=Object.keys(n).filter(function(t){return null!=n[t]}).filter(function(t){return!Array.isArray(n[t])||Array.isArray(n[t])&&n[t].length>0}).map(function(t){var e=n[t];return Array.isArray(e)?{key:t,value:e.join(",")}:{key:t,value:e}}).map(function(t){return t.key+"="+t.value}).join("&");return t+"//"+this._cog.apiHostAndPath+"?"+e},t}();r.decorators=[{type:l.W}],r.ctorParameters=function(){return[{type:i.a}]}},Y8Vo:function(t,n,e){"use strict";var l=e("L+R4"),i=(e.n(l),e("wu3h")),r=(e.n(i),e("45Dp")),o=(e.n(r),e("DAFs")),u=(e.n(o),e("FD+i")),_=(e.n(u),e("qXjp")),a=(e.n(_),e("IzNg")),s=(e.n(a),e("MVjO")),c=(e.n(s),e("oFcf")),p=(e.n(c),e("nR/1")),h=(e.n(p),e("cUYv")),d=(e.n(h),e("594w")),f=(e.n(d),e("7N90")),y=(e.n(f),e("/Ife")),g=(e.n(y),e("2tFN")),m=(e.n(g),e("ChGr")),b=(e.n(m),e("ZSR1")),R=(e.n(b),e("EKrm"));e.n(R)},j55w:function(t,n,e){"use strict";var l=e("3j3K"),i=e("RRpH"),r=e("2Je8"),o=e("5oXY"),u=e("Qbdm"),_=e("NVOs"),a=e("Fzro"),s=e("R7kf"),c=e("qONJ"),p=e("XsIA"),h=e("r6Ik"),d=e("Db+E"),f=e("XoxQ"),y=e("Riz6"),g=e("7W0R"),m=e("IIaX");e.d(n,"a",function(){return R});var b=function(t){function n(n){return t.call(this,n,[h.a,d.a,f.a],[f.a])||this}return __extends(n,t),Object.defineProperty(n.prototype,"_LOCALE_ID_27",{get:function(){return null==this.__LOCALE_ID_27&&(this.__LOCALE_ID_27=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_28",{get:function(){return null==this.__NgLocalization_28&&(this.__NgLocalization_28=new r.a(this._LOCALE_ID_27)),this.__NgLocalization_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_29",{get:function(){return null==this.__APP_ID_29&&(this.__APP_ID_29=l.d()),this.__APP_ID_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_30",{get:function(){return null==this.__IterableDiffers_30&&(this.__IterableDiffers_30=l.e()),this.__IterableDiffers_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_31",{get:function(){return null==this.__KeyValueDiffers_31&&(this.__KeyValueDiffers_31=l.f()),this.__KeyValueDiffers_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_32",{get:function(){return null==this.__DomSanitizer_32&&(this.__DomSanitizer_32=new u.b(this.parent.get(u.c))),this.__DomSanitizer_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_33",{get:function(){return null==this.__Sanitizer_33&&(this.__Sanitizer_33=this._DomSanitizer_32),this.__Sanitizer_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_34",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_34&&(this.__HAMMER_GESTURE_CONFIG_34=new u.d),this.__HAMMER_GESTURE_CONFIG_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_35",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_35&&(this.__EVENT_MANAGER_PLUGINS_35=[new u.e(this.parent.get(u.c)),new u.f(this.parent.get(u.c)),new u.g(this.parent.get(u.c),this._HAMMER_GESTURE_CONFIG_34)]),this.__EVENT_MANAGER_PLUGINS_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_36",{get:function(){return null==this.__EventManager_36&&(this.__EventManager_36=new u.h(this._EVENT_MANAGER_PLUGINS_35,this.parent.get(l.g))),this.__EventManager_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_37",{get:function(){return null==this.__ɵDomSharedStylesHost_37&&(this.__ɵDomSharedStylesHost_37=new u.i(this.parent.get(u.c))),this.__ɵDomSharedStylesHost_37},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_38",{get:function(){return null==this.__ɵDomRendererFactory2_38&&(this.__ɵDomRendererFactory2_38=new u.j(this._EventManager_36,this._ɵDomSharedStylesHost_37)),this.__ɵDomRendererFactory2_38},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_39",{get:function(){return null==this.__RendererFactory2_39&&(this.__RendererFactory2_39=this._ɵDomRendererFactory2_38),this.__RendererFactory2_39},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_40",{get:function(){return null==this.__ɵSharedStylesHost_40&&(this.__ɵSharedStylesHost_40=this._ɵDomSharedStylesHost_37),this.__ɵSharedStylesHost_40},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_41",{get:function(){return null==this.__Testability_41&&(this.__Testability_41=new l.h(this.parent.get(l.g))),this.__Testability_41},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_42",{get:function(){return null==this.__Meta_42&&(this.__Meta_42=new u.k(this.parent.get(u.c))),this.__Meta_42},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_43",{get:function(){return null==this.__Title_43&&(this.__Title_43=new u.l(this.parent.get(u.c))),this.__Title_43},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_44",{get:function(){return null==this.__ɵi_44&&(this.__ɵi_44=new _.a),this.__ɵi_44},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_45",{get:function(){return null==this.__BrowserXhr_45&&(this.__BrowserXhr_45=new a.a),this.__BrowserXhr_45},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_46",{get:function(){return null==this.__ResponseOptions_46&&(this.__ResponseOptions_46=new a.b),this.__ResponseOptions_46},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_47",{get:function(){return null==this.__XSRFStrategy_47&&(this.__XSRFStrategy_47=a.c()),this.__XSRFStrategy_47},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_48",{get:function(){return null==this.__XHRBackend_48&&(this.__XHRBackend_48=new a.d(this._BrowserXhr_45,this._ResponseOptions_46,this._XSRFStrategy_47)),this.__XHRBackend_48},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_49",{get:function(){return null==this.__RequestOptions_49&&(this.__RequestOptions_49=new a.e),this.__RequestOptions_49},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_50",{get:function(){return null==this.__Http_50&&(this.__Http_50=a.f(this._XHRBackend_48,this._RequestOptions_49)),this.__Http_50},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_LoaderService_52",{get:function(){return null==this.__LoaderService_52&&(this.__LoaderService_52=new p.a(this._AbmConfig_51)),this.__LoaderService_52},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ActivatedRoute_53",{get:function(){return null==this.__ActivatedRoute_53&&(this.__ActivatedRoute_53=o.a(this._Router_22)),this.__ActivatedRoute_53},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NoPreloading_54",{get:function(){return null==this.__NoPreloading_54&&(this.__NoPreloading_54=new o.b),this.__NoPreloading_54},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadingStrategy_55",{get:function(){return null==this.__PreloadingStrategy_55&&(this.__PreloadingStrategy_55=this._NoPreloading_54),this.__PreloadingStrategy_55},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RouterPreloader_56",{get:function(){return null==this.__RouterPreloader_56&&(this.__RouterPreloader_56=new o.c(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_55)),this.__RouterPreloader_56},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_PreloadAllModules_57",{get:function(){return null==this.__PreloadAllModules_57&&(this.__PreloadAllModules_57=new o.d),this.__PreloadAllModules_57},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ROUTER_INITIALIZER_58",{get:function(){return null==this.__ROUTER_INITIALIZER_58&&(this.__ROUTER_INITIALIZER_58=o.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_58},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_BOOTSTRAP_LISTENER_59",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_59&&(this.__APP_BOOTSTRAP_LISTENER_59=[this._ROUTER_INITIALIZER_58]),this.__APP_BOOTSTRAP_LISTENER_59},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=u.m(),this._NgProbeToken_2=[o.f()],this._ɵg_3=new o.g(this),this._APP_INITIALIZER_4=[l.i,u.n(this.parent.get(u.o,null),this._NgProbeToken_2),o.h(this._ɵg_3)],this._ApplicationInitStatus_5=new l.j(this._APP_INITIALIZER_4),this._ɵf_6=new l.k(this.parent.get(l.g),this.parent.get(l.l),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new l.m(this._ApplicationRef_7),this._BrowserModule_9=new u.p(this.parent.get(u.p,null)),this._ɵba_10=new _.b,this._FormsModule_11=new _.c,this._HttpModule_12=new a.g,this._ɵa_13=o.i(this.parent.get(o.j,null)),this._UrlSerializer_14=new o.k,this._RouterOutletMap_15=new o.l,this._ROUTER_CONFIGURATION_16={useHash:!0},this._LocationStrategy_17=o.m(this.parent.get(r.c),this.parent.get(r.d,null),this._ROUTER_CONFIGURATION_16),this._Location_18=new r.e(this._LocationStrategy_17),this._Compiler_19=new l.n,this._NgModuleFactoryLoader_20=new l.o(this._Compiler_19,this.parent.get(l.p,null)),this._ROUTES_21=[[{path:"",component:y.a},{path:"panorama",component:g.a}]],this._Router_22=o.n(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(o.o,null),this.parent.get(o.p,null)),this._RouterModule_23=new o.q(this._ɵa_13,this._Router_22),this._HighlightJsModule_24=new s.a,this._AbmModule_25=new c.a,this._AppDemoModule_26=new i.a,this._AbmConfig_51={apiKey:"p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP"},this._AppDemoModule_26},n.prototype.getInternal=function(t,n){return t===r.b?this._CommonModule_0:t===l.q?this._ErrorHandler_1:t===l.r?this._NgProbeToken_2:t===o.g?this._ɵg_3:t===l.s?this._APP_INITIALIZER_4:t===l.j?this._ApplicationInitStatus_5:t===l.k?this._ɵf_6:t===l.t?this._ApplicationRef_7:t===l.m?this._ApplicationModule_8:t===u.p?this._BrowserModule_9:t===_.b?this._ɵba_10:t===_.c?this._FormsModule_11:t===a.g?this._HttpModule_12:t===o.r?this._ɵa_13:t===o.s?this._UrlSerializer_14:t===o.l?this._RouterOutletMap_15:t===o.t?this._ROUTER_CONFIGURATION_16:t===r.f?this._LocationStrategy_17:t===r.e?this._Location_18:t===l.n?this._Compiler_19:t===l.u?this._NgModuleFactoryLoader_20:t===o.u?this._ROUTES_21:t===o.j?this._Router_22:t===o.q?this._RouterModule_23:t===s.a?this._HighlightJsModule_24:t===c.a?this._AbmModule_25:t===i.a?this._AppDemoModule_26:t===l.c?this._LOCALE_ID_27:t===r.g?this._NgLocalization_28:t===l.v?this._APP_ID_29:t===l.w?this._IterableDiffers_30:t===l.x?this._KeyValueDiffers_31:t===u.q?this._DomSanitizer_32:t===l.y?this._Sanitizer_33:t===u.r?this._HAMMER_GESTURE_CONFIG_34:t===u.s?this._EVENT_MANAGER_PLUGINS_35:t===u.h?this._EventManager_36:t===u.i?this._ɵDomSharedStylesHost_37:t===u.j?this._ɵDomRendererFactory2_38:t===l.z?this._RendererFactory2_39:t===u.t?this._ɵSharedStylesHost_40:t===l.h?this._Testability_41:t===u.k?this._Meta_42:t===u.l?this._Title_43:t===_.a?this._ɵi_44:t===a.a?this._BrowserXhr_45:t===a.h?this._ResponseOptions_46:t===a.i?this._XSRFStrategy_47:t===a.d?this._XHRBackend_48:t===a.j?this._RequestOptions_49:t===a.k?this._Http_50:t===m.a?this._AbmConfig_51:t===p.a?this._LoaderService_52:t===o.v?this._ActivatedRoute_53:t===o.b?this._NoPreloading_54:t===o.w?this._PreloadingStrategy_55:t===o.c?this._RouterPreloader_56:t===o.d?this._PreloadAllModules_57:t===o.x?this._ROUTER_INITIALIZER_58:t===l.A?this._APP_BOOTSTRAP_LISTENER_59:n},n.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_37&&this._ɵDomSharedStylesHost_37.ngOnDestroy(),this.__RouterPreloader_56&&this._RouterPreloader_56.ngOnDestroy()},n}(l.B),R=new l.C(b,i.a)},nBc1:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},oYMd:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l={production:!0}},qONJ:function(t,n,e){"use strict";var l=e("2Je8"),i=e("3j3K"),r=e("NFm0"),o=e("uC4U"),u=e("IIaX"),_=e("XsIA");e.d(n,"a",function(){return a});var a=function(){function t(){}return t.forRoot=function(n){return{ngModule:t,providers:[{provide:u.a,useValue:n}]}},t}();a.decorators=[{type:i._1,args:[{imports:[l.b],providers:[_.a],declarations:[r.a,o.a],exports:[r.a,o.a]}]}],a.ctorParameters=function(){return[]}},r6Ik:function(t,n,e){"use strict";function l(t){return o._25(0,[o._31(402653184,1,{mapComp:0}),(t()(),o._27(0,null,null,35,"div",[["class","card mb-3"]],null,null,null,null,null)),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),o._26(null,["示例"])),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,29,"div",[["class","card-block"]],null,null,null,null,null)),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,2,"textarea",[["highlight-js",""],["style","display:none;"]],null,null,null,null,null)),o._29(212992,null,0,u.a,[o.L],null,null),(t()(),o._26(null,['<abm-map #map [options]="options" (ready)="onReady($event)" style="height: 300px;"></abm-map>'])),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,1,"abm-map",[["style","height: 300px;"]],[[2,"angular-baidu-maps-container",null]],[[null,"ready"]],function(t,n,e){var l=!0,i=t.component;if("ready"===n){l=!1!==i.onReady(e)&&l}return l},a.a,a.b)),o._29(770048,[[1,4],["map",4]],0,s.a,[o.L,c.a,p.a,o.g],{options:[0,"options"]},{ready:"ready"}),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,1,"p",[],null,null,null,null,null)),(t()(),o._26(null,["",""])),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,1,"h5",[["class","mt-3 mb-3 pb-3"],["style","border-bottom:1px solid #eee;"]],null,null,null,null,null)),(t()(),o._26(null,["操作"])),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,7,"div",[["class","mb-3"]],null,null,null,null,null)),(t()(),o._26(null,["\n            "])),(t()(),o._27(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.panTo()&&l}return l},null,null)),(t()(),o._26(null,["改变地图中心"])),(t()(),o._26(null,["\n            "])),(t()(),o._27(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.zoom()&&l}return l},null,null)),(t()(),o._26(null,["自动放大缩小"])),(t()(),o._26(null,["\n        "])),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,4,"div",[["class","mb-3"]],null,null,null,null,null)),(t()(),o._26(null,["\n            "])),(t()(),o._27(0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(t,n,e){var l=!0,i=t.component;if("click"===n){l=!1!==i.infoWindow()&&l}return l},null,null)),(t()(),o._26(null,["添加信息窗口"])),(t()(),o._26(null,["\n        "])),(t()(),o._26(null,["\n    "])),(t()(),o._26(null,["\n"])),(t()(),o._26(null,["\n"])),(t()(),o._27(0,null,null,10,"div",[["class","card mb-3"]],null,null,null,null,null)),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(t()(),o._26(null,["卫星地图"])),(t()(),o._26(null,["\n    "])),(t()(),o._27(0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(t()(),o._26(null,["\n        "])),(t()(),o._27(0,null,null,1,"abm-map",[["style","height: 300px;"]],[[2,"angular-baidu-maps-container",null]],[[null,"ready"]],function(t,n,e){var l=!0,i=t.component;if("ready"===n){l=!1!==i.onReadySatellite(e)&&l}return l},a.a,a.b)),o._29(770048,null,0,s.a,[o.L,c.a,p.a,o.g],{options:[0,"options"]},{ready:"ready"}),(t()(),o._26(null,["\n    "])),(t()(),o._26(null,["\n"])),(t()(),o._26(null,["\n"]))],function(t,n){var e=n.component;t(n,9,0),t(n,13,0,e.options),t(n,46,0,e.satelliteOptions)},function(t,n){var e=n.component;t(n,12,0,!0),t(n,16,0,e.status),t(n,45,0,!0)})}function i(t){return o._25(0,[(t()(),o._27(0,null,null,1,"demo",[],null,null,null,l,d)),o._29(180224,null,0,_.a,[o.L,o.g],null,null)],null,null)}var r=e("vYwE"),o=e("3j3K"),u=e("52WS"),_=e("Riz6"),a=e("mNs4"),s=e("NFm0"),c=e("IIaX"),p=e("XsIA");e.d(n,"a",function(){return f});var h=[r.a],d=o._24({encapsulation:2,styles:h,data:{}}),f=o._30("demo",_.a,i,{},{},[])},"s7k+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=(e("Y8Vo"),e("3j3K")),i=e("oYMd"),r=e("Qbdm"),o=e("j55w");i.a.production&&e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(o.a)},uC4U:function(t,n,e){"use strict";var l=e("3j3K"),i=e("XsIA"),r=e("IIaX");e.d(n,"a",function(){return o});var o=function(){function t(t,n,e,i){this.el=t,this.COG=n,this.loader=e,this.zone=i,this.options={},this.ready=new l.R,this.map=null}return t.prototype.ngOnInit=function(){this._initMap()},t.prototype.ngOnChanges=function(t){"options"in t&&this._updateOptions()},t.prototype._initMap=function(){var t=this;this.map||this.loader.load().then(function(){t.zone.runOutsideAngular(function(){try{t.map=new BMap.Panorama(t.el.nativeElement,t.options)}catch(t){console.warn("全景初始化失败",t)}}),t.ready.emit(t.map)}).catch(function(t){console.warn("js加载失败",t)})},t.prototype._updateOptions=function(){this.options=Object.assign({},this.COG.panoramaOptions,this.options),this.map&&this.map.setOptions(this.options)},t.prototype.destroy=function(){},t.prototype.ngOnDestroy=function(){this.destroy()},t}();o.decorators=[{type:l._20,args:[{selector:"abm-panorama",template:"",styles:["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],host:{"[class.angular-baidu-maps-container]":"true"},encapsulation:l._13.None}]}],o.ctorParameters=function(){return[{type:l.L},{type:r.a},{type:i.a},{type:l.g}]},o.propDecorators={options:[{type:l.M}],ready:[{type:l.V}]}},vYwE:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]}},[0]);