/**
 * Created by brickspert on 2016/12/22.
 */
/*桌面*/
import React, {Component} from 'react';
import './Desktop.scss';
import {browserHistory} from 'react-router';
import {autoPlay} from 'util/audioAutoPlay'

import Bless from '../../components/Bless/Bless';
import BgImg from '../../components/BgImg/BgImg';

const bgImg = require('../../asset/images/photos/desktop-bg.jpg');
const iconImg = require('./images/icon.png');
const count1Img = require('./images/count-1.png');
const count2Img = require('./images/count-2.png');
const count3Img = require('./images/count-3.png');
const closeImg = require('./images/close.png');

const audioMp3 = require('./audio/duang.mp3');
const audioOgg = require('./audio/duang.ogg');

/*底部热点区组件*/
class BottomHotSpot extends Component {
    /*
     * count 新消息数量 可选为 1,2,3
     * animateType 动画类型 可选 1，2
     * left 热点区离左边的距离 例如 12px
     * */
    _getCountImg(count) {
        switch (count) {
            case 1:
                return count1Img;
            case 2:
                return count2Img;
            case 3:
                return count3Img;
        }
    }

    _redirectToUrl(url) {
        browserHistory.push({
            pathname: url
        });
    }

    render() {
        const countImg = this._getCountImg(this.props.count);
        const redPointClassName = this.props.animateType ? `red-point  red-point-animate-${this.props.animateType}` : `red-point`;
        return (
            <div className="bottom-hot-spot" style={{left: this.props.left}}
                 onClick={()=>this._redirectToUrl(this.props.toUrl)}>
                <img className={redPointClassName} src={countImg}/>
            </div>
        )
    };
}
/*头部热点区组件*/
class TopHotSpot extends Component {
    /*
     * topText 头部文字
     * middleText 中间文字
     * bottomText 下部文字
     * */
    render() {
        const topText = this.props.topText;
        const middleText = this.props.middleText;
        const bottomText = this.props.bottomText;
        return (
            <div className="top-hot-spot" style={{left: this.props.left}} onClick={()=>this.props.click()}>
                {topText ?
                    <div className="top-text">{topText}</div>
                    :
                    ''
                }
                {middleText ?
                    <div className="middle-text">{middleText}</div>
                    :
                    ''
                }
                {bottomText ?
                    <div className="bottom-text">{bottomText}</div>
                    :
                    ''
                }
            </div>
        )
    };
}
export default class Desktop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoShow: false,
            blessShow: false
        }
    }

    _openVideo() {
        this.setState({
            videoShow: true
        });
    }

    _closeVideo() {
        this.setState({
            videoShow: false
        });
    }

    _openBless() {
        this.setState({
            blessShow: true
        });
    }

    _closeBless() {
        this.setState({
            blessShow: false
        });
    }

    _redirectToUrl(url) {
        browserHistory.push({
            pathname: url
        });
    }

    componentDidMount() {
        autoPlay('desktop-audio');
    }

    render() {
        return (
            <div className="full-page desktop-page">
                {/*背景照片*/}
                <BgImg src={bgImg} animate={true}/>
                <div className="bg">
                    <div className="white-bottom"></div>
                    <img src={iconImg} className="icon"/>
                    {/*上部热定区*/}
                    <TopHotSpot left="27px" topText={userType == 'boy' ? '一月' : '2月'}
                                middleText={userType == 'boy' ? '31' : '04'} bottomText={'日期'}
                                click={()=>this._redirectToUrl('/integrated')}/>
                    <TopHotSpot left="180px" bottomText={'视频'} click={()=>this._openVideo()}/>
                    <TopHotSpot left="332px" bottomText={'相册'} click={()=>this._redirectToUrl('/photos')}/>
                    <TopHotSpot left="485px" bottomText={'祝福'} click={()=>this._openBless()}/>
                    {/*下部热点区*/}
                    <BottomHotSpot count={2} left="27px" animateType={2} toUrl={'/dialing'}/>
                    <BottomHotSpot count={1} left="180px" animateType={2} toUrl={'/wechat'}/>
                    <BottomHotSpot count={3} left="332px" animateType={1} toUrl={'/photograph'}/>
                    <BottomHotSpot count={1} left="485px" toUrl={'/map'}/>
                </div>
                <audio className="hidden" autoPlay id="desktop-audio">
                    <source src={audioOgg} type="audio/ogg"/>
                    <source src={audioMp3} type="audio/mpeg"/>
                </audio>

                {/*视频*/}
                {this.state.videoShow ?
                    <div className='video' onClick={()=>this._closeVideo()}>
                        <img src={closeImg} className="close" onClick={()=>this._closeVideo()}/>
                        <iframe src="https://v.qq.com/iframe/player.html?vid=d0362vjag67&tiny=0&auto=0"
                                onClick={(e)=>e.preventDefault()}></iframe>
                    </div>
                    :
                    ''
                }
                {/*祝福*/}
                {this.state.blessShow ?
                    <Bless close={()=> this._closeBless()}/>
                    : ''
                }
            </div>
        );
    }
}