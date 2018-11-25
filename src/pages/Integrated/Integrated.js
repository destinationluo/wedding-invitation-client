/**
 * Created by brickspert on 2016/12/31.
 */
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './Integrated.scss';
import Back from 'components/Back/Back';
import Bless from 'components/Bless/Bless';
import BgImg from '../../components/BgImg/BgImg';

const bgImg = require('../../asset/images/photos/integrated-bg.jpg');

const circle1Img = require('./images/circle-1.png');
const circle2Img = require('./images/circle-2.png');
const whiteCircleImg = require('./images/white-circle.png');

class IntegratedItem extends Component {

    render() {
        return (
            <div className={"integrated-item " + this.props.position} onClick={()=>this.props.click()}>
                <img src={this.props.imgSrc}/>
                <p className="p-title">{this.props.title}</p>
                <p className="p-intro">{this.props.intro}</p>
            </div>
        );
    }
}

export default class Integrated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blessShow: false
        }
    }

    _redirectToInvite() {
        browserHistory.push({
            pathname: '/invite'
        });
    }

    _redirectToSnapshot() {
        browserHistory.push({
            pathname: '/snapshot'
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

    render() {
        return (
            <div className="full-page integrated-page">
                <BgImg src={bgImg} animate={false}/>
                <div className="bg">
                    <img src={whiteCircleImg} className="white-circle"/>
                    <IntegratedItem
                        position="item-1"
                        imgSrc={circle1Img}
                        title="爱的邀约"
                        intro="邀请信息"
                        click={()=>this._redirectToInvite()}
                    />
                    <IntegratedItem
                        position="item-2"
                        imgSrc={circle2Img}
                        title="播映快照"
                        intro="独家收藏"
                        click={()=>this._redirectToSnapshot()}
                    />
                    <IntegratedItem
                        position="item-3"
                        imgSrc={circle2Img}
                        title="好友动态"
                        intro="祝福留言"
                        click={()=>this._openBless()}
                    />
                    <Back position={"integrated-back"}/>

                    {/*祝福*/}
                    {this.state.blessShow ?
                        <Bless close={()=> this._closeBless()}/>
                        : ''
                    }
                </div>
            </div>
        )
    }
}