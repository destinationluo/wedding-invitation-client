/**
 * Created by brickspert on 2016/12/20.
 */
/*来电页面*/
import React, {Component} from 'react';
import './Call.scss';
import BgImg from '../../components/BgImg/BgImg';
import {browserHistory} from 'react-router';
import {autoPlay} from 'util/audioAutoPlay'

const bgImg = require('../../asset/images/photos/call-bg.jpg');
const tipImg = require('./images/tip.png');
const messageImg = require('./images/message.png');
const refuseImg = require('./images/refuse.png');
const answerImg = require('./images/answer.png');
const audioMp3 = require('./audio/calls.mp3');
const audioOgg = require('./audio/calls.ogg');

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    _redirectToTalk() {
        browserHistory.push({
            pathname: '/talk'
        });
    }

    componentDidMount() {
        autoPlay('call-audio');
    }

    componentWillUnmount() {
        this.audioTimer && clearTimeout(this.audioTimer);
    }

    render() {
        return (
            <div className="full-page call-page">
                {/*背景照片*/}
                <BgImg src={bgImg} animate={true}/>
                <div className="bg">
                    <img className="tip img-line-1" src={tipImg}/>
                    <img className="message img-line-1" src={messageImg}/>
                    <img className="refuse img-line-2" src={refuseImg}/>
                    <img className="answer img-line-2" src={answerImg} onClick={()=>this._redirectToTalk()}/>
                </div>
                <audio className="hidden" id="call-audio" autoPlay loop>
                    <source src={audioOgg} type="audio/ogg"/>
                    <source src={audioMp3} type="audio/mpeg"/>
                </audio>
            </div>
        );
    }
}