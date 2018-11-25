/**
 * Created by brickspert on 2016/12/24.
 */
/*后退按钮*/
import React, {Component} from 'react';
import './Back.scss';
import {browserHistory} from 'react-router';

const backImg = require('./images/back.png');

export default class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _goBack() {
        browserHistory.goBack(-1);
    }

    render() {
        return (
            <div className={"back " + (this.props.position ? this.props.position : '')} onClick={()=>this._goBack()}>
                <img src={backImg}/>
            </div>
        )
    };
}