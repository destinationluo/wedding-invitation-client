/**
 * Created by brickspert on 2016/12/21.
 */
/**右上角音乐符号**/
import React, {Component} from 'react';
import './Music.scss';
const bgm = require('../../asset/audio/bgm.mp3');
const playMusicArr = [
    'photos', 'integrated', 'invite', 'snapshot', 'dialing',
    'map'
];
export default class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (playMusicArr.indexOf(nextProps.path) >= 0) {
            this._play();
        } else {
            this._pause();
        }
    }

    _play() {
        this.setState({
            play: true
        });
        const bgm = document.getElementById('bgm');
        bgm.play();
    }

    _pause() {
        this.setState({
            play: false
        });
        const bgm = document.getElementById('bgm');
        bgm.pause();
    }

    _toggle() {
        if (this.state.play) {
            this._pause();
        } else {
            this._play();
        }
    }

    render() {
        return (
            <div className={this.state.play ? 'music music-play' : ' music'} onClick={()=>this._toggle()}>
                <i className="music-icon"></i>
                <i className="circle circle-1"></i>
                <i className="circle circle-2"></i>
                <i className="circle circle-3"></i>

                <audio className="hidden" loop id="bgm">
                    <source src={bgm} type="audio/mpeg"/>
                </audio>
            </div>

        )
    }
}