/**
 * Created by brickspert on 2016/12/25.
 */
/*微信聊天页面*/
import React, {Component} from 'react';
import './Wechat.scss';
import {browserHistory} from 'react-router';
import BgImg from '../../components/BgImg/BgImg';
import Back from '../../components/Back/Back';

const bgImg = require('./images/bg.jpg');
const returnImg = require('../../asset/images/return.png');
const boyImg = require('../../asset/images/photos/wechat-boy.jpg');
const girlImg = require('../../asset/images/photos/wechat-girl.jpg');
const groupImg = require('./images/wechat-group.png');

const boyAudioMp3 = require('../../asset/audio/wechat-boy.mp3');
const girlAudioMp3 = require('../../asset/audio/wechat-girl.mp3');

class WechatItem extends Component {

    render() {
        const {avatar, topText, middleText, bottomText} = this.props;
        return (
            <div className="wechat-item" onClick={()=>this.props.click()}>
                <img className="wechat-item-avatar" src={avatar}/>
                <div className={`wechat-item-text ${this.props.animateClass}`}>
                    <p className={topText ? 'top-text' : 'hidden'}>{topText}</p>
                    <p className={middleText ? 'middle-text' : 'hidden'}>{middleText}</p>
                    <p className={bottomText ? 'bottom-text' : 'hidden'}>{bottomText}</p>
                </div>
            </div>
        )
    }
}

export default class Wechat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _goBack() {
        browserHistory.goBack(-1);
    }

    _playBoyAudio() {
        const audioElement = document.getElementById('wechat-audio');
        audioElement.src = boyAudioMp3;
        audioElement.play();
    }

    _playGirlAudio() {
        const audioElement = document.getElementById('wechat-audio');
        audioElement.src = girlAudioMp3;
        audioElement.play();
    }

    render() {
        return (
            <div className="full-page wechat-page">
                <BgImg src={bgImg} animate={false}/>
                <WechatItem avatar={boyImg} topText={'新郎'} bottomText={'语音消息'} animateClass={'wechat-item-animate-1'}
                            click={()=>this._playBoyAudio()}/>
                <WechatItem avatar={girlImg} topText={'新娘'} bottomText={'语音消息'} animateClass={'wechat-item-animate-2'}
                            click={()=>this._playGirlAudio()}/>
                {/*<WechatItem avatar={groupImg} middleText={'DD&JL'} animateClass={'wechat-item-animate-3'}/>*/}
                <Back />
                <img className="return" src={returnImg} onClick={()=>this._goBack()}/>

                <audio className="hidden" id="wechat-audio">
                    <source src="" type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}