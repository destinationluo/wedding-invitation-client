/**
 * Created by brickspert on 2017/1/2.
 */

import React, {Component} from 'react';
import './BgImg.scss';

export default class Loading extends Component {
    render() {
        const {src, animate, fillAll=false} = this.props;
        return (
            <div
                className={animate ? (fillAll? 'bg-img-all bg-img-animate': 'bg-img bg-img-animate'):(fillAll? 'bg-img-all':'bg-img')}>
                <img src={src}/>
            </div>
        )
    }
}