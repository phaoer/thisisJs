var thisisJs;!function(){"use strict";var e=function(e){};e.prototype.common={isArray:function(e){return"[object Array]"==Object.prototype.toString.call(e)},arraySort:function(e){for(var r,t,n=e.length,a=0;a<n-1;a++){for(var o=(r=a)+1;o<n;o++)e[o]<e[r]&&(r=o);t=e[a],e[a]=e[r],e[r]=t}return e},arrayEase:function(e){for(var r=[],t={},n=0;n<e.length-1;n++)t[e[n]]||(t[e[n]]=1,r.push(e[n]));return r},getUrlParam:function(e){var r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(r);return null!=t?unescape(t[2]):null},encode:function(e){var r,t,n,a,o,c,h,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",g=0;for(e=this.utf8Encode(e);g<e.length;)a=(r=e.charCodeAt(g++))>>2,o=(3&r)<<4|(t=e.charCodeAt(g++))>>4,c=(15&t)<<2|(n=e.charCodeAt(g++))>>6,h=63&n,isNaN(t)?c=h=64:isNaN(n)&&(h=64),d=d+i.charAt(a)+i.charAt(o)+i.charAt(c)+i.charAt(h);return d},utf8Encode:function(e){e=e.replace(/\r\n/g,"\n");for(var r="",t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?r+=String.fromCharCode(n):(127<n&&n<2048?r+=String.fromCharCode(n>>6|192):(r+=String.fromCharCode(n>>12|224),r+=String.fromCharCode(n>>6&63|128)),r+=String.fromCharCode(63&n|128))}return r},decode:function(e){var r,t,n,a,o,c,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i="",d=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");d<e.length;)r=h.indexOf(e.charAt(d++))<<2|(a=h.indexOf(e.charAt(d++)))>>4,t=(15&a)<<4|(o=h.indexOf(e.charAt(d++)))>>2,n=(3&o)<<6|(c=h.indexOf(e.charAt(d++))),i+=String.fromCharCode(r),64!=o&&(i+=String.fromCharCode(t)),64!=c&&(i+=String.fromCharCode(n));return i=this.utf8Decode(i)},utf8Decode:function(e){for(var r="",t=0,n=c1=c2=0;t<e.length;)(n=e.charCodeAt(t))<128?(r+=String.fromCharCode(n),t++):191<n&&n<224?(c2=e.charCodeAt(t+1),r+=String.fromCharCode((31&n)<<6|63&c2),t+=2):(c2=e.charCodeAt(t+1),c3=e.charCodeAt(t+2),r+=String.fromCharCode((15&n)<<12|(63&c2)<<6|63&c3),t+=3);return r},dateFormate:function(e,r){var t={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},appendCss:function(e){if(!e||0===e.length)throw new Error("argument 'path' is required !");var r=document.getElementsByTagName("head")[0],t=document.createElement("link");t.href=e,t.rel="stylesheet",t.type="text/css",r.appendChild(t)},appendJs:function(e){if(!e||0===e.length)throw new Error("argument 'path' is required !");var r=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src=e,t.type="text/javascript",r.appendChild(t)}},thisisJs=e}();