/**
 * Created by Angel on 2018/11/30.
 */
/**
 * Created by wuyakun on 2017/5/23.
 */

let wxUtils = {};

/**
 * 是否开启右上角Menu
 * @param open
 */

wxUtils.optionMenu = function (open = true) {
    if (open) {
        openOptionMenu();
    } else {
        disabledOptionMenu();
    }
};

/**
 * 是否禁用右上角
 */

function disabledOptionMenu() {
    if (typeof WeixinJSBridge === "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady(true), false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady(true));
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(true));
        }
    } else {
        onBridgeReady(true);
    }
}

/**
 * 开启menu
 */

function openOptionMenu() {
    if (typeof WeixinJSBridge === "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady(false), false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady(false));
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(false));
        }
    } else {
        onBridgeReady(false);
    }
}

function onBridgeReady(disable = true) {
    if (typeof WeixinJSBridge !== "undefined") WeixinJSBridge.call(disable ? 'hideOptionMenu' : 'showOptionMenu');
}
/**
 * 隐藏微信网页底部的导航栏
 * @param disable
 */

wxUtils.disabledToolbar = function (disable = true) {
    console.log('disabledToolbar ', disable);
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 通过下面这个API隐藏底部导航栏
        WeixinJSBridge.call(disable ? 'hideToolbar' : 'showToolbar');
    });
};

/**
 * 获取网络类型
 */

wxUtils.getNetworkType = function () {
    //network_type:wifi wifi网络 2 network_type:edge 非wifi,包含3G/2G 3 network_type:fail 网络断开连接 4 network_type:wwan 2g或者3g
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
        // 在这里拿到e.err_msg，这里面就包含了所有的网络类型
        return e;
    });
};

export default wxUtils;