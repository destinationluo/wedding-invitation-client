/**
 * Created by brickspert on 2016/12/31.
 */
/*快照页面*/
import React, {Component} from 'react';
import './Snapshot.scss';
import  Back from 'components/Back/Back';
import BgImg from '../../components/BgImg/BgImg';

const firstImg = require('asset/images/photos/snapshot-1.jpg');
const secondImg = require('asset/images/photos/snapshot-2.jpg');
const bgImg = require('./images/camera.png');
export default class Snapshot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="full-page snapshot-page">
                <BgImg src={bgImg} animate={false}/>
                <img src={firstImg} className="first-img photo"/>
                <img src={secondImg} className="second-img photo"/>
                <Back position={"back-left-top"}/>
            </div>
        );
    }
}