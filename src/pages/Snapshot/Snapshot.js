/**
 * Created by brickspert on 2016/12/31.
 */
/*快照页面*/
import React, {Component} from 'react';
import './Snapshot.scss';
import  Back from 'components/Back/Back';
import BgImg from '../../components/BgImg/BgImg';

const bgImg = require('./images/camera.png');
export default class Snapshot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="full-page snapshot-page">
                <BgImg src={bgImg} animate={false}  fillAll={true}/>
                <Back position={"back-left-top"}/>
            </div>
        );
    }
}