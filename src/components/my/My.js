import React, { Component } from 'react'
import './My.scss'
import axios from 'axios'
export default class My extends Component {
    componentWillMount(){
        axios.get('http://127.0.0.1:8080/haha.json').then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className='cshop-my'>
                {/* 我的头像开始 */}
                <div className="my-img">
                    <img src={require('../../images/user-img0.jpg')} alt=""/>
                </div>
                {/* 我的头像结束 */}
                {/* 我的订单开始 */}
                <div className="my-order">
                    <div className="order-left">
                        <img src={require('../../images/order.png')} alt=""/>
                        <p>我的订单</p>
                    </div>
                    <div className="order-right">
                        <p>查看所有订单</p>
                        <i className="icon icon-toright"></i>
                    </div>
                </div>
                {/* 我的订单结束 */}
                {/* 我的导航开始 */}
                <div className="my-nav">
                    <div className="item">
                        <i className="icon icon-pay"></i>
                        <p>待付款</p>
                    </div>
                    <div className="item">
                        <i className="icon icon-recieve"></i>
                        <p>待收货</p>
                    </div>
                    <div className="item">
                        <i className="icon icon-recieve-good"></i>
                        <p>已收货</p>
                    </div>
                    <div className="item">
                        <i className="icon icon-cancel"></i>
                        <p>已取消</p>
                    </div>
                    <div className="item">
                        <i className="icon icon-aftersale"></i>
                        <p>售后</p>
                    </div>
                </div>
                {/* 我的导航结束 */}
                {/* 我的其他操作开始 */}
                <div className="my-operation">
                    <div className="item">
                        <div className="item-left">
                            <img src={require('../../images/collect.png')} alt=""/>
                            <p>我的收藏</p>
                        </div>
                        <div className="item-right">
                            <p>2</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={require('../../images/service.png')} alt=""/>
                            <p>联系客服</p>
                        </div>
                        <div className="item-right">
                            <p></p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={require('../../images/about.png')} alt=""/>
                            <p>关于我们</p>
                        </div>
                        <div className="item-right">
                            <p></p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={require('../../images/set.png')} alt=""/>
                            <p>设置</p>
                        </div>
                        <div className="item-right">
                            <p></p>
                        </div>
                    </div>
                </div>
                {/* 我的其他操作结束 */}
            </div>
        )
    }
}
