
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/tags","pages/index/localNoti","pages/index/other"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","background":"#efeff4"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/image/icon_component.png","selectedIconPath":"static/image/icon_component_HL.png","text":"首页"},{"pagePath":"pages/index/tags","iconPath":"static/image/icon_API.png","selectedIconPath":"static/image/icon_API_HL.png","text":"TagAlias"},{"pagePath":"pages/index/localNoti","iconPath":"static/image/icon_API.png","selectedIconPath":"static/image/icon_API_HL.png","text":"本地通知"},{"pagePath":"pages/index/other","iconPath":"static/image/icon_API.png","selectedIconPath":"static/image/icon_API_HL.png","text":"其他"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"JPush_Hbuilder_Demo","compilerVersion":"3.1.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/index/tags","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/index/localNoti","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}},{"path":"/pages/index/other","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"uni-app"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
