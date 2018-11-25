import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from '../pages/App.js'
import Call from '../pages/Call/Call';
import Talk from '../pages/Talk/Talk';
import Desktop from '../pages/Desktop/Desktop';
import Dialing from '../pages/Dialing/Dialing';
import Wechat from '../pages/Wechat/Wechat';
import Map from '../pages/Map/Map';
import Photos from '../pages/Photos/Photos';
import Photograph from '../pages/Photograph/Photograph';
import Integrated from '../pages/Integrated/Integrated';
import Invite from '../pages/Invite/Invite';
import Snapshot from '../pages/Snapshot/Snapshot';
export default (store) => {

    /**
     * Please keep routes in alphabetical order
     */
    return (
        <Route path="/" component={App}>
            { /*电话来电页*/ }
            <IndexRoute component={Call}/>
            { /* 通话页面 */ }
            <Route path="talk" component={Talk}/>
            { /* 首屏页面 */ }
            <Route path="desktop" component={Desktop}/>
            { /* 通话记录页面 */ }
            <Route path="dialing" component={Dialing}/>
            { /* 微信页面 */ }
            <Route path="wechat" component={Wechat}/>
            { /* 地图页面 */ }
            <Route path="map" component={Map}/>
            { /* 相册页面 */ }
            <Route path="photos" component={Photos}/>
            { /* 拍照页面 */ }
            <Route path="photograph" component={Photograph}/>
            { /* 综合页面 */ }
            <Route path="integrated" component={Integrated}/>
            { /* 邀请页面 */ }
            <Route path="invite" component={Invite}/>
            { /* 快照页面 */ }
            <Route path="snapshot" component={Snapshot}/>
            { /* Catch all route */ }
            <Route path="*" component={Call}/>
        </Route>
    );
};
