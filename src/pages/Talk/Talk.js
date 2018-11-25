/**
 * Created by brickspert on 2016/12/22.
 */
/*通话页面*/
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import BgImg from '../../components/BgImg/BgImg';
import './Talk.scss';
import {autoPlay} from 'util/audioAutoPlay'

const bgImg = require('../../asset/images/photos/talk-bg.jpg');
const functionImg = require('./images/function.png');
const hungUpImg = require('./images/hung-up.png');
const boyMp3 = require('../../asset/audio/talk.mp3');
const girlMp3 = require('../../asset/audio/talk-girl.mp3');
export default class Talk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: Date.parse(new Date()) / 1000
        }
    }

    componentDidMount() {
        this.interval = setInterval(()=> {
            this.setState({
                timestamp: Date.parse(new Date()) / 1000
            });
        }, 1000);
        /*音频延迟0.1秒播放*/
        this.audioTimer = setTimeout(()=> {
            autoPlay('talk-audio');
            document.getElementById('talk-audio').play();
        }, 100);
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.audioTimer && clearTimeout(this.audioTimer);
    }

    _countDown(timestamp) {
        var endTimestamp = 1577808000;
        if (timestamp == 0 || timestamp >= endTimestamp) {
            return '';
        }
        var time = endTimestamp - timestamp;
        var day = Math.floor(time / 86400);
        var hour = Math.floor((time - day * 86400) / 1440);
        var minute = Math.floor((time - day * 86400 - hour * 1440) / 60);
        var second = Math.floor(time - day * 86400 - hour * 1440 - minute * 60);

        return `${day}天${hour}小时${minute}分${second}秒`;
    }

    _redirectToDesktop() {
        browserHistory.push({
            pathname: '/desktop'
        });
    }

    render() {
        const countDown = this._countDown(this.state.timestamp);
        return (
            <div className="full-page talk-page">
                {/*背景照片*/}
                <BgImg src={bgImg} animate={false}/>
                <div className="bg">
                    <div className="count-down-title">婚礼倒计时</div>
                    <div className="count-down-time">{countDown}</div>
                    <img className="function" src={functionImg}/>
                    <img className="hung-up" src={hungUpImg} onClick={()=>this._redirectToDesktop()}/>
                </div>
                <audio className="hidden" id="talk-audio">
                    <source src={userType == 'boy' ? boyMp3 : girlMp3} type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}