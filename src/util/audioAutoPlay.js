/**
 * Created by brickspert on 2017/1/3.
 */

/*ios微信音频不能自动播放问题解决*/
export function autoPlay(eId) {
    wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: false,
        appId: '',
        timestamp: 1,
        nonceStr: '',
        signature: '',
        jsApiList: []
    });
    wx.ready(()=> {
        document.getElementById(eId).play();
    });
}