var thisisJs;!function(){"use strict";var e=function(e){};e.prototype.common={isArray:function(e){return"[object Array]"==Object.prototype.toString.call(e)},arraySort:function(e){for(var r,t,n=e.length,o=0;o<n-1;o++){for(var a=(r=o)+1;a<n;a++)e[a]<e[r]&&(r=a);t=e[o],e[o]=e[r],e[r]=t}return e},arrayEase:function(e){for(var r=[],t={},n=0;n<e.length-1;n++)t[e[n]]||(t[e[n]]=1,r.push(e[n]));return r},getUrlParam:function(e){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(r);return null!=t?unescape(t[2]):null},encode:function(e){var r,t,n,o,a,i,c,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h="",d=0;for(e=this.utf8Encode(e);d<e.length;)o=(r=e.charCodeAt(d++))>>2,a=(3&r)<<4|(t=e.charCodeAt(d++))>>4,i=(15&t)<<2|(n=e.charCodeAt(d++))>>6,c=63&n,isNaN(t)?i=c=64:isNaN(n)&&(c=64),h=h+s.charAt(o)+s.charAt(a)+s.charAt(i)+s.charAt(c);return h},utf8Encode:function(e){e=e.replace(/\r\n/g,"\n");for(var r="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?r+=String.fromCharCode(n):(127<n&&n<2048?r+=String.fromCharCode(n>>6|192):(r+=String.fromCharCode(n>>12|224),r+=String.fromCharCode(n>>6&63|128)),r+=String.fromCharCode(63&n|128))}return r},decode:function(e){var r,t,n,o,a,i,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="",h=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<e.length;)r=c.indexOf(e.charAt(h++))<<2|(o=c.indexOf(e.charAt(h++)))>>4,t=(15&o)<<4|(a=c.indexOf(e.charAt(h++)))>>2,n=(3&a)<<6|(i=c.indexOf(e.charAt(h++))),s+=String.fromCharCode(r),64!=a&&(s+=String.fromCharCode(t)),64!=i&&(s+=String.fromCharCode(n));return s=this.utf8Decode(s)},utf8Decode:function(e){for(var r="",t=0,n=c1=c2=0;t<e.length;)(n=e.charCodeAt(t))<128?(r+=String.fromCharCode(n),t++):191<n&&n<224?(c2=e.charCodeAt(t+1),r+=String.fromCharCode((31&n)<<6|63&c2),t+=2):(c2=e.charCodeAt(t+1),c3=e.charCodeAt(t+2),r+=String.fromCharCode((15&n)<<12|(63&c2)<<6|63&c3),t+=3);return r},dateFormate:function(e,r){var t={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},appendCss:function(e){if(!e||0===e.length)throw new Error("argument 'path' is required !");var r=document.getElementsByTagName("head")[0],t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",r.appendChild(t)},appendJs:function(e){if(!e||0===e.length)throw new Error("argument 'path' is required !");var r=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src=e,t.type="text/javascript",r.appendChild(t)},checkTerminal:function(){var e=navigator.userAgent,r=(e.toLowerCase(),navigator.appVersion,{versions:{mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:-1<e.indexOf("Android")||-1<e.indexOf("Linux"),iPhone:-1<e.indexOf("iPhone"),iPad:-1<e.indexOf("iPad"),weixin:-1<e.indexOf("MicroMessenger"),qq:" qq"==e.match(/\sQQ/i)},language:(navigator.browserLanguage||navigator.language).toLowerCase()});return{mobile:r.versions.mobile,ios:r.versions.ios,android:r.versions.android,iPhone:r.versions.iPhone,iPad:r.versions.iPad,weixin:r.versions.weixin,qq:r.versions.qq}}},thisisJs=e}();