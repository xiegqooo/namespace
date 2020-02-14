/**
 * 全局变量命名
 */
var GLOBAl_SX = {};
/**
 * 命名函数
 */
GLOBAl_SX.namespace = function (str) {
    var arr = str.split("."),
        o = GLOBAl_SX;
    for (i = (arr[0] == "GLOBAl_K") ? 1 : 0; i < arr.length; i++) {
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
};

/*
 * 命名方法
 
//event相关
GLOBAl_SX.namespace("Event");
GLOBAl_SX.Event.getEventTarget = function (e) {
    e = window.event || e;
    return e.srcElement || e.target;
}
*/