//=================================================================
// 工具
// 谢广泉
// email:xieguangquan@cfpamf.org.cn
// 时间：2016年06月13日
//=================================================================
GLOBAl_SX.namespace('util');
GLOBAl_SX.util = {
	//  60 秒
	count:60
    ,countdown:function(fisrt,progress){
    	
    	if (GLOBAl_SX.util.count == 0) {
    		fisrt();
    		return ;
    	}else{
    		progress();
    		GLOBAl_SX.util.count -- ;
    	}
    	
    	setTimeout(function() {
    		GLOBAl_SX.util.countdown(fisrt,progress);
    	}, 1000);
    }
	// 日期格式化
    ,dateformat:function(date,format){
    	var o = {
    		    "M+" : date.getMonth() + 1,
    		    "d+" : date.getDate(),
    		    "h+" : date.getHours(),
    		    "m+" : date.getMinutes(),
    		    "s+" : date.getSeconds(),
    		    "q+" : Math.floor((date.getMonth() + 3) / 3),
    		    "S" : date.getMilliseconds()
    	}

    	if (/(y+)/.test(format)){
    		    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4
    		    - RegExp.$1.length));
    	}

    	for (var k in o){
    		if (new RegExp("(" + k + ")").test(format)){
    		    format = format.replace(RegExp.$1, RegExp.$1.length == 1
    		    ? o[k]
    		    : ("00" + o[k]).substr(("" + o[k]).length));
    		}
    	}
	    return format;
    }
    // 转化为 json
    ,strToJson:function(data){
    	return eval('(' + data + ')');
    }
    // 跳转地址 
    ,wlh:function(href){
    	window.location.href = href
    }
    // json 转化为 url 
    ,jsonToURL:function(obj){
    	var str = [];
        for(var p in obj){
        	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str;
    }
}
