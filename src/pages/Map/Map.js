/**
 * Created by brickspert on 2016/12/25.
 */
/*地图页面*/
import React, {Component} from 'react';
import './Map.scss';
import {browserHistory} from 'react-router';

const hertImg = require('./images/hert.png');
const closeImg = require('./images/close.png');
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // if (userType == 'boy') {
        //     var point = new BMap.Point(105.096734, 31.097837);
        //     var title = '四川省三台县梓州国际酒店潼川府';
        // } else {
        //     var point = new BMap.Point(105.096734, 31.097837);
        //     var title = '四川省三台县梓州国际酒店潼川府';
        // }


        // var mapElement = document.getElementById('map');
        // mapElement.style.zoom = 640 / parseInt(window.screen.width);
        // var map = new BMap.Map("map");    // 创建Map实例
        // map.centerAndZoom(point, 14);  // 初始化地图,设置中心点坐标和地图级别
        // map.setCurrentCity("三台县");          // 设置地图显示的城市 此项是必须设置的
        // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        // map.setMapStyle({style: 'redalert'});
        // /*地图颜色*/
        // var styleJson = [
        //     {
        //         "featureType": "all",
        //         "elementType": "geometry",
        //         "stylers": {
        //             "hue": "#007fff",
        //             "saturation": 89
        //         }
        //     },
        //     {
        //         "featureType": "water",
        //         "elementType": "all",
        //         "stylers": {
        //             "color": "#ffffff"
        //         }
        //     }
        // ]
        // map.setMapStyle({styleJson: styleJson});
        //
        // /*地图上的小狐心*/
        // var pt = point;
        // var myIcon = new BMap.Icon(hertImg, new BMap.Size(40, 40));
        // var marker = new BMap.Marker(pt, {icon: myIcon});  // 创建标注
        // map.addOverlay(marker);              // 将标注添加到地图中
        //
        // /*信息框*/
        // var infoWindow = new BMapLib.SearchInfoWindow(map, "我们的婚礼等你见证~", {
        //     title: title, //标题
        //     width: 290, //宽度
        //     height: 40, //高度
        //     panel: "panel", //检索结果面板
        //     enableAutoPan: true, //自动平移
        //     searchTypes: []
        // });
        // infoWindow.open(point);

        var infoWindow;
        var map = new AMap.Map("map", {
            resizeEnable: true,
            // mapStyle: 'amap://styles/wine', //设置地图的显示样式
            // features: ['bg', 'point', 'road', 'building'],
            center: [105.090225, 31.091905],
            zoom: 15
        });
        //在指定位置打开信息窗体
        function openInfo() {
            //构建信息窗体中显示的内容
            var info = [];
            info.push("<div class='input-card content-window-card'><div><img style=\"float:left;\" src=\"../../asset/images/hert.png \"/></div> ");
            info.push("<div style=\"padding:7px 0px 0px 0px;\"><h4>我们的婚礼宴席地点</h4>");
            info.push("<p class='input-item'>手机 : 17710122410</p>");
            info.push("<p class='input-item'>时间 : 2019年1月29日11点38分</p>");
            info.push("<p class='input-item'>地址 : 四川省三台县梓州国际酒店潼川府</p></div></div>");

            infoWindow = new AMap.InfoWindow({
                content: info.join("")  //使用默认信息窗体框样式，显示信息内容
            });

            infoWindow.open(map, map.getCenter());
        }

        openInfo();
    }

    _goBack() {
        browserHistory.goBack(-1);
    }

    render() {
        return (
            <div className="full-page map-page">
                <img src={closeImg} className="close" onClick={()=>this._goBack()}/>
                <div id="map" className="map"></div>
            </div>
        )
    }
}