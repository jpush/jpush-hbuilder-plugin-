(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"02e8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("view",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputBadge,expression:"inputBadge"}],attrs:{_i:2},domProps:{value:t._$s(2,"v-model",t.inputBadge)},on:{input:function(e){e.target.composing||(t.inputBadge=e.target.value)}}}),n("br"),n("label",{attrs:{_i:4},on:{click:t.setBadge}}),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputPhoneNumber,expression:"inputPhoneNumber"}],attrs:{_i:7},domProps:{value:t._$s(7,"v-model",t.inputPhoneNumber)},on:{input:function(e){e.target.composing||(t.inputPhoneNumber=e.target.value)}}}),n("br"),n("label",{attrs:{_i:9},on:{click:t.setMobileNumber}}),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.latitude,expression:"latitude"}],attrs:{_i:16},domProps:{value:t._$s(16,"v-model",t.latitude)},on:{input:function(e){e.target.composing||(t.latitude=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.longitude,expression:"longitude"}],attrs:{_i:18},domProps:{value:t._$s(18,"v-model",t.longitude)},on:{input:function(e){e.target.composing||(t.longitude=e.target.value)}}}),n("br"),n("label",{attrs:{_i:20},on:{click:t.setLatLng}})])])},a=[]},"05e4":function(t,e,n){"use strict";n.r(e);var i=n("4bd1"),o=n("9c3b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(u.length>1){var c=u.pop();s=u.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=u[0];console[r](s)}n.r(e),n.d(e,"log",(function(){return r})),n.d(e,"default",(function(){return u}))},"29b6":function(t,e,n){"use strict";n.r(e);var i=n("e16a"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"2c8a":function(t,e,n){"use strict";n.r(e);var i=n("ca64");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,r,u,s,c=n("f0c5"),l=Object(c["a"])(i["default"],a,r,!1,null,null,null,!1,u,s);e["default"]=l.exports},"2f3e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("view",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTags,expression:"inputTags"}],attrs:{_i:2},domProps:{value:t._$s(2,"v-model",t.inputTags)},on:{input:function(e){e.target.composing||(t.inputTags=e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAlias,expression:"inputAlias"}],attrs:{_i:4},domProps:{value:t._$s(4,"v-model",t.inputAlias)},on:{input:function(e){e.target.composing||(t.inputAlias=e.target.value)}}}),n("br"),n("label",{attrs:{_i:6},on:{click:t.addTags}}),n("label",{attrs:{_i:7},on:{click:t.updateTags}}),n("label",{attrs:{_i:8},on:{click:t.queryTags}}),n("br"),n("br"),n("label",{attrs:{_i:11},on:{click:t.deleteTag}}),n("label",{attrs:{_i:12},on:{click:t.deleteTags}}),n("label",{attrs:{_i:13},on:{click:t.queryTag}}),n("br"),n("br"),n("label",{attrs:{_i:16},on:{click:t.setAlias}}),n("label",{attrs:{_i:17},on:{click:t.deleteAlias}}),n("label",{attrs:{_i:18},on:{click:t.queryAlias}})])])},a=[]},"4bd1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("button",{attrs:{_i:2},on:{click:t.addLocalNotification}}),n("br"),n("button",{attrs:{_i:4},on:{click:t.removeLocalNotification}}),n("br"),n("button",{attrs:{_i:6},on:{click:t.clearLocalNotifications}}),n("br")])},a=[]},"83df":function(t,e,n){"use strict";n.r(e);var i=n("9766"),o=n("a985");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},"898d":function(t,e,n){"use strict";n.r(e);var i=n("b333"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},8999:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.requireNativePlugin("JG-JPush"),o={data:function(){return{}},methods:{addLocalNotification:function(){i.addLocalNotification({messageID:"123",title:"title",content:"content",extras:{name:"Cindy",age:"16"}})},removeLocalNotification:function(){i.removeLocalNotification({messageID:"123"})},clearLocalNotifications:function(){i.clearLocalNotifications()},showToast:function(t){uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}}};e.default=o},"8bbf":function(t,e){t.exports=Vue},9766:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("label"),n("label",[t._v(t._$s(4,"t0-0",t._s(t.connectStatus)))]),n("br"),n("label"),n("label",{attrs:{_i:7},model:{value:t._$s(7,"v-model",t.deviceToken),callback:function(e){t.deviceToken=e},expression:"deviceToken"}}),n("br"),n("label"),n("label",{attrs:{_i:10},model:{value:t._$s(10,"v-model",t.udid),callback:function(e){t.udid=e},expression:"udid"}}),n("br"),n("label"),n("label",[t._v(t._$s(13,"t0-0",t._s(t.registrationID)))]),n("br"),n("label"),n("label",{attrs:{_i:16},model:{value:t._$s(16,"v-model",t.appkey),callback:function(e){t.appkey=e},expression:"appkey"}}),n("br"),n("label"),n("button",{attrs:{_i:19},on:{click:t.openSettingsForNotification}}),n("br"),n("button",{attrs:{_i:21},on:{click:t.setLoggerEnable}}),n("br"),n("button",{attrs:{_i:23},on:{click:t.setLoggerUnEnable}}),n("br"),n("button",{attrs:{_i:25},on:{click:t.getRegistrationID}})])},a=[]},"9c3b":function(t,e,n){"use strict";n.r(e);var i=n("8999"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a985:function(t,e,n){"use strict";n.r(e);var i=n("daa1"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},b333:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.requireNativePlugin("JG-JPush");i.addMobileNumberListener((function(t){t.code;uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}));var o={data:function(){return{inputPhoneNumber:"",inputBadge:"",latitude:"",longitude:""}},methods:{setMobileNumber:function(){var t=this.inputPhoneNumber;i.setMobileNumber({mobileNumber:t})},setBadge:function(){var t=parseInt(this.inputBadge);i.setBadge(t)},setLatLng:function(){i.setLocation({latitude:parseFloat(this.latitude),longitude:parseFloat(this.longitude)})},showToast:function(t){uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}}};e.default=o},c425:function(t,e,n){"use strict";n("ea1c");var i=a(n("8bbf")),o=a(n("2c8a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,o.default.mpType="app";var c=new i.default(u({},o.default));c.$mount()},ca64:function(t,e,n){"use strict";n.r(e);var i=n("f06e"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d5a3:function(t,e,n){"use strict";n.r(e);var i=n("02e8"),o=n("898d");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports},daa1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("JG-JPush"),i={data:function(){return{connectStatus:"\u672a\u94fe\u63a5",deviceToken:"",udid:"",registrationID:"\u672a\u83b7\u5f97",appkey:""}},onLoad:function(){var e=this;t("log","\u5f00\u59cb\u76d1\u542c\u8fde\u63a5\u72b6\u6001"," at pages/index/index.vue:49"),uni.$on("connectStatusChange",(function(n){var i="";1==n?(i="\u5df2\u8fde\u63a5",e.getRegistrationID()):i="\u672a\u8fde\u63a5",t("log","\u76d1\u542c\u5230\u4e86\u8fde\u63a5\u72b6\u6001\u53d8\u5316 --- ",i," at pages/index/index.vue:58"),e.connectStatus=i}))},onUnload:function(){uni.$off("connectStatusChange")},methods:{openSettingsForNotification:function(){var t=this;n.openSettingsForNotification((function(e){t.showToast(e)}))},setLoggerEnable:function(){n.setLoggerEnable(!0)},setLoggerUnEnable:function(){n.setLoggerEnable(!1)},getRegistrationID:function(){var e=this;n.getRegistrationID((function(n){var i=n.registerID;t("log",i," at pages/index/index.vue:87"),e.registrationID=i}))},addLocalNotification:function(){n.addLocalNotification({messageID:"123",title:"title",content:"content",extras:{delay:10,badge:8}})},showToast:function(t){uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}}};e.default=i}).call(this,n("0de9")["default"])},e16a:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.requireNativePlugin("JG-JPush"),o=1;i.addTagAliasListener((function(t){uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}));var a={data:function(){return{inputTags:"",inputAlias:""}},methods:{addTags:function(){var t=this.inputTags.split(",");i.addTags({tags:t,sequence:o++})},updateTags:function(){var t=this.inputTags.split(",");i.updateTags({tags:t,sequence:o++})},deleteTag:function(){var t=this.inputTags.split(",");i.deleteTags({tags:t,sequence:o++})},deleteTags:function(){i.cleanTags({sequence:o++})},queryTag:function(){var t=this.inputTags;i.queryTag({tag:t,sequence:o++})},queryTags:function(){i.getAllTags({sequence:o++})},setAlias:function(){var t=this.inputAlias;i.setAlias({alias:t,sequence:o++})},deleteAlias:function(){i.deleteAlias({sequence:o++})},queryAlias:function(){i.queryAlias({sequence:o++})},showToast:function(t){uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})}}};e.default=a},ea1c:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("83df").default)})),__definePage("pages/index/tags",(function(){return Vue.extend(n("fb10").default)})),__definePage("pages/index/localNoti",(function(){return Vue.extend(n("05e4").default)})),__definePage("pages/index/other",(function(){return Vue.extend(n("d5a3").default)}))},f06e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("JG-JPush"),i={onLaunch:function(){if(t("log","App Launch"," at App.vue:6"),"ios"==uni.getSystemInfoSync().platform){var e=n.locationServicesEnabled(),i=n.getLocationAuthorizationStatus();t("log","locationAuthorizationStatus",i," at App.vue:11"),1==e&&i<3&&n.requestLocationAuthorization((function(e){t("log","\u5b9a\u4f4d\u6743\u9650",e.status," at App.vue:14")})),n.requestNotificationAuthorization((function(t){var e=t.status;e<2&&uni.showToast({icon:"none",title:"\u60a8\u8fd8\u6ca1\u6709\u6253\u5f00\u901a\u77e5\u6743\u9650",duration:3e3})}))}n.initJPushService(),n.setLoggerEnable(!0),n.addConnectEventListener((function(t){var e=t.connectEnable;uni.$emit("connectStatusChange",e)})),n.addNotificationListener((function(t){t.notificationEventType,t.messageID,t.title,t.content,t.extras;uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})})),n.addCustomMessageListener((function(t){t.type,t.messageType,t.content;uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})})),n.addLocalNotificationListener((function(t){t.messageID,t.title,t.content,t.extras;uni.showToast({icon:"none",title:JSON.stringify(t),duration:3e3})})),n.addGeofenceListener((function(t){t.code,t.type,t.geofenceId,t.userInfo;uni.showToast({icon:"none",title:"\u89e6\u53d1\u5730\u7406\u56f4\u680f",duration:3e3})})),n.setIsAllowedInMessagePop(!0),n.pullInMessage((function(e){var n=e.code;t("log",n," at App.vue:90")})),n.addInMessageListener((function(e){var n=e.eventType,i=e.messageType,o=e.content;t("log","inMessageListener",n,i,o," at App.vue:97"),uni.showToast({icon:"none",title:JSON.stringify(e),duration:3e3})}))},onShow:function(){t("log","App Show"," at App.vue:109")},onHide:function(){t("log","App Hide"," at App.vue:112")}};e.default=i}).call(this,n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,o,a,r,u,s,c){var l,f="function"===typeof t?t.options:t;if(s){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(f.components,p)&&(f.components[p]=s[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):o&&(l=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},fb10:function(t,e,n){"use strict";n.r(e);var i=n("2f3e"),o=n("29b6");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=s.exports}},[["c425","app-config"]]]);