/**
 * Created by brickspert on 2016/12/31.
 */
/*邀请页面*/
import React, {Component} from 'react';
import './Invite.scss';
import  Back from 'components/Back/Back';
import BgImg from '../../components/BgImg/BgImg';
const bgImg = require('../../asset/images/photos/invite-bg.jpg');

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="full-page invite-page">
                {/*背景照片*/}
                <BgImg src={bgImg} animate={true}/>
                <div className="text-box">
                    <div className="text-title">
                        <p className="english">Our invitation</p>
                        <p>何金成 & 罗倩的邀约</p>
                    </div>
                    <div className="text-content">
                        <p>各位亲朋好友：</p>
                        {userType == 'boy' ?
                            <p>诚挚邀请您于2019年1月29日，星期二，11:38参加何金成和罗倩的结婚典礼。</p>
                            :
                            <p>诚挚邀请您于2019年1月29日，星期二，11:38参加何金成和罗倩的结婚典礼。</p>

                        }

                        <p>您的到来是对我们最好的祝福，敬备喜宴，恭请光临。</p>
                        <p>北京的小伙伴，年后回京另设宴席。</p>
                    </div>
                </div>
                <Back position={"back-left-top"}/>
            </div>
        )
    }
}