/**
 * Created by brickspert on 2017/1/2.
 */
import React, {Component} from 'react';
import './Loading.scss';

const loadingImg = require('../../asset/images/loading.gif');

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={loadingImg}/>
            </div>
        )
    }
}