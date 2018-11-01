/**
 * author Irwin Pu
 */
 var thisisJs;
 (function(){
 	"use strict";
 	/**
	 * @param {json} data
	 */

    var init = function(data){
    };

    init.prototype.common = {
        isArray : function(arr) {
	        return Object.prototype.toString.call(arr) == "[object Array]";
	    },
        arraySort : function(arr) {
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
		arrayEase : function(arr){
			var newArr = [];
		    var obj = {};
		    for(var i = 0;i < arr.length - 1;i++){
		    	if(!obj[arr[i]]){
		             obj[arr[i]] = 1;
		             newArr.push(arr[i]);
		    	}
		    }
		    return newArr;
		},
		getUrlParam : function(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null){
	        	return unescape(r[2]);
	        }else{
 				return null;
	        }
	    },
	    encode : function(input){
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
	    utf8Encode : function (string) {  
	        string = string.replace(/\r\n/g,"\n");  
	        var utftext = "";  
	        for (var n = 0; n < string.length; n++) {  
	            var c = string.charCodeAt(n);  
	            if (c < 128) {  
	                utftext += String.fromCharCode(c);  
	            } else if((c > 127) && (c < 2048)) {  
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
	    decode : function (input) {  
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
	    utf8Decode : function (utftext) {  
	        var string = "";  
	        var i = 0;  
	        var c = c1 = c2 = 0;  
	        while ( i < utftext.length ) {  
	            c = utftext.charCodeAt(i);  
	            if (c < 128) {  
	                string += String.fromCharCode(c);  
	                i++;  
	            } else if((c > 191) && (c < 224)) {  
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
	        if (/(y+)/.test(fmt)){
	        	fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	        }
	        for (var k in o) {
	            if (new RegExp("(" + k + ")").test(fmt)){
	            	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	            }
	        }
	        return fmt;
	    },
	    appendCss : function(path){
			if(!path || path.length === 0){
				throw new Error("argument 'path' is required !");
			}
			var head = document.getElementsByTagName("head")[0];
	        var link = document.createElement("link");
	        link.href = path;
	        link.rel = "stylesheet";
	        link.type = "text/css";
	        head.appendChild(link);
	    },
	    appendJs : function(path){
			if(!path || path.length === 0){
				throw new Error("argument 'path' is required !");
			}
			var head = document.getElementsByTagName("head")[0];
	        var script = document.createElement("script");
	        script.src = path;
	        script.type = "text/javascript";
	        head.appendChild(script);
	    }
    };
    thisisJs = init;
 })();