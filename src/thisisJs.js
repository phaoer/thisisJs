/**
 * author Irwin Pu
 */
var thisisJs;
(function() {
  "use strict";
  /**
   * @param {json} data
   */

  var init = function(data) {};

  init.prototype.common = {
    /**
     * @param arr 对象数组 
     */
    isArray: function(arr) {
      return Object.prototype.toString.call(arr) == "[object Array]";
    },
    /**
     * @param arr 排序数组 
     */
    arraySort: function(arr) {
      var len = arr.length;
      var minIndex, temp;
      for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      return arr;
    },
    /**
     * @param arr 数组
     */
    upsetArr: function(arr) {
      return arr.sort(function() {
        return Math.random() - 0.5;
      });
    },
    /**
     * @param arr 去重数组
     */
    arrayEase: function(arr) {
      var newArr = [];
      var obj = {};
      for (var i = 0; i < arr.length - 1; i++) {
        if (!obj[arr[i]]) {
          obj[arr[i]] = 1;
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    /**
     * @param name 获取参数名 
     */
    getUrlParam: function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      } else {
        return null;
      }
    },
    /**
     * @param input 转码格式 
     */
    encode: function(input) {
      var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = this.utf8Encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output +
          _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    },
    utf8Encode: function(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    },
    /**
     * @param input 转码格式 
     */
    decode: function(input) {
      var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = this.utf8Decode(output);
      return output;
    },
    utf8Decode: function(utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;
      while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return string;
    },
    /**
     * @param fmt 处理格式
     * @param date 标准时间
     */
    dateFormate: function(fmt, date) {
      var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
      }
      return fmt;
    },
    /**
     * @param path 插入css地址
     */
    appendCss: function(path) {
      if (!path || path.length === 0) {
        throw new Error("argument 'path' is required !");
      }
      var head = document.getElementsByTagName("head")[0];
      var link = document.createElement("link");
      link.href = path;
      link.rel = "stylesheet";
      link.type = "text/css";
      head.appendChild(link);
    },
    /**
     * @param path 插入js地址
     */
    appendJs: function(path) {
      if (!path || path.length === 0) {
        throw new Error("argument 'path' is required !");
      }
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.src = path;
      script.type = "text/javascript";
      head.appendChild(script);
    },
    checkTerminal: function() {
      var u = navigator.userAgent;
      var ua = u.toLowerCase();
      var app = navigator.appVersion;
      var data = {};
      var browser = {
        versions: function() {
          return {
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf("iPad") > -1, //是否iPad    
            weixin: u.indexOf("MicroMessenger") > -1, //是否微信   
            qq: u.match(/\sQQ/i) == " qq" //是否QQ  
          };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
      };
      data = {
        mobile: browser.versions.mobile,
        ios: browser.versions.ios,
        android: browser.versions.android,
        iPhone: browser.versions.iPhone,
        iPad: browser.versions.iPad,
        weixin: browser.versions.weixin,
        qq: browser.versions.qq
      };
      return data;
    },
    /**
     * 密码强度
     * @param str 字符串 
     * @returns 1：密码弱 2：密码中等 3：密码强 4：密码很强
     */
    checkPwdLevel: function(str) {
      var nowLv = 0;
      if (str.length < 6) {
        return nowLv;
      };
      if (/[0-9]/.test(str)) {
        nowLv++;
      };
      if (/[a-z]/.test(str)) {
        nowLv++;
      };
      if (/[A-Z]/.test(str)) {
        nowLv++;
      };
      if (/[\.|-|_]/.test(str)) {
        nowLv++;
      };
      return nowLv;
    },
    /**
     * 设置cookie
     * @param name cookie名称
     * @param value cookie值
     * @param iDay cookie的时间
     */
    setCookie: function(name, value, iDay) {
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + iDay);
      document.cookie = name + "=" + value + ";expires = " + oDate;
    },
    /**
     * 获取cookie
     * @param name cookie名称
     * @returns
     */
    getCookie: function(name) {
      var arr = document.cookie.split(";");
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == name) {
          return arr2[1];
        }
      }
      return "";
    },
    /**
     * 删除cookie
     * @param name cookie名称
     */
    removeCookie: function(name) {
      setCookie(name, 1, -1);
    },
    /**
     * 倒计时（默认开始时间为当前时间）
     * @param endTime 结束时间
     * @param endTime 结束时间
     * @returns data = {day:1,hour:2..............}
     */
    getEndTime: function(startTime,endTime) {
      var startDate = new Date(startTime); //开始时间，当前时间
      var endDate = new Date(endTime); //结束时间，需传入时间参数
      var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
      var d = 0,
        h = 0,
        m = 0,
        s = 0;
      var data = {};
      if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
      }
      data = {
        day: d,
        hour: h,
        min: m,
        sec: s
      };
      return data;
    }
  };
  thisisJs = init;
})();
