import React, { Component } from 'react'
import './Cart.scss'
import axios from '../../utils/axios'
export default class Cart extends Component {
    componentWillMount(){
        // axios.get('/getCarts').then(res => {
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div className='cshop-cart'>
                {/* 购物车头部开始 */}
                <div className="cart-header">
                    <i className="icon icon-return"></i>
                    <span className="header-title">购物车</span>
                    <span className="header-edit">编辑</span>
                    {/* <i className="icon icon-recieve"></i> */}
                </div>
                {/* 购物车头部结束 */}
                {/* 购物车列表开始 */}
                <div className="cart-list">
                    <div className="item">
                        <div className="item-header">
                            <i className="icon icon-radio"></i>
                            <img src={require('../../images/cartuser01.png')} alt=""/>
                            <p>海绵包包</p>
                        </div>
                        <div className="item-product">
                            <img src={require('../../images/cartprodu01.png')} alt=""/>
                            <div className="info">
                                <p>首款海绵包包</p>
                                <span className='type'>颜色：黑色</span>
                                <div className="numsg">
                                    <span className='price'>￥68.00</span>
                                    <div className="count">
                                        <i className="icon icon-sub"></i>
                                        <span>1</span>
                                        <i className="icon icon-add"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-header">
                            <i className="icon icon-radio"></i>
                            <img src={require('../../images/cartuser01.png')} alt=""/>
                            <p>海绵包包</p>
                        </div>
                        <div className="item-product">
                            <img src={require('../../images/cartprodu01.png')} alt=""/>
                            <div className="info">
                                <p>首款海绵包包</p>
                                <span className='type'>颜色：黑色</span>
                                <div className="numsg">
                                    <span className='price'>￥68.00</span>
                                    <div className="count">
                                        <i className="icon icon-sub"></i>
                                        <span>1</span>
                                        <i className="icon icon-add"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 购物车列表结束 */}
                {/* 购物车底部操作开始 */}
                <div className="cart-footer">
                    <div className="footer-total">
                        <span>合计：</span>
                        <span>￥136.00</span>
                    </div>
                    <button>去结算</button>
                </div>
                {/* 购物车底部操作结束 */}
            </div>
        )
    }
}
