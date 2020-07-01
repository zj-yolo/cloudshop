import React, { Component } from 'react'
import './Community.scss'
export default class Community extends Component {
    render() {
        return (
            <div className='cshop-community'>
                {/* 社区头部的开始 */}
                <div className="community-header">
                    <i className="icon icon-return"></i>
                    <span className="header-title">朋友圈~</span>
                    <i className="icon icon-addCommunity"></i>
                </div>
                {/* 社区头部的结束 */}
                {/* 社区列表的开始 */}
                <div className="community-content">
                    <div className="content-item">
                        <div className="header">
                            <img src={require('../../images/user-img0.jpg')} alt=""/>
                            <span>我是郭小帅</span>
                        </div>
                        <div className="container">
                            <p>[潮流服饰]：秋季大换装，就在我的小店，欢迎参观哈……</p>
                            <div className="imglist">
                                <img src={require('../../images/user01.png')} alt=''></img>
                                <img src={require('../../images/user02.png')} alt=''></img>
                                <img src={require('../../images/user03.png')} alt=''></img>
                            </div>
                        </div>
                        <div className="operation">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="header">
                            <img src={require('../../images/user-img0.jpg')} alt=""/>
                            <span>我是郭小帅</span>
                        </div>
                        <div className="container">
                            <p>[潮流服饰]：秋季大换装，就在我的小店，欢迎参观哈……</p>
                            <div className="imglist">
                                <img src={require('../../images/user01.png')} alt=''></img>
                                <img src={require('../../images/user02.png')} alt=''></img>
                                <img src={require('../../images/user03.png')} alt=''></img>
                            </div>
                        </div>
                        <div className="operation">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="header">
                            <img src={require('../../images/user-img0.jpg')} alt=""/>
                            <span>我是郭小帅</span>
                        </div>
                        <div className="container">
                            <p>[潮流服饰]：秋季大换装，就在我的小店，欢迎参观哈……</p>
                            <div className="imglist">
                                <img src={require('../../images/user01.png')} alt=''></img>
                                <img src={require('../../images/user02.png')} alt=''></img>
                                <img src={require('../../images/user03.png')} alt=''></img>
                            </div>
                        </div>
                        <div className="operation">
                            <span>刚刚</span>
                            <i className="icon icon-share"></i>
                        </div>
                    </div>
                </div>
                {/* 社区列表的结束 */}

            </div>
        )
    }
}
