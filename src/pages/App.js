import React, {Component} from 'react';
import {Link} from 'react-router';
import '../asset/css/common.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Music from '../components/Music/Music';
import Loading from '../components/Loading/Loading';

export default class App extends Component {

    render() {
        const {inLoading} = this.props;
        //若页面处于加载状态，显示 loading
        const loading = inLoading ? <Loading /> : null;

        return (
            <div id="root">
                {loading}
                <Music path={this.props.routes[1].path}/>
                <ReactCSSTransitionGroup
                    transitionName="page-change"
                    transitionEnterTimeout={500}
                    transitionLeave={false}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
