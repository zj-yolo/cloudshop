import React, { Component } from 'react'
import './Home.scss'
import axious from '../../utils/axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default class Home extends Component {

    componentDidMount(){
        axious.get('/getIndexLoopimg').then(res=>{
            // console.log(res)
            this.setState({
                swiper_list:res.wdata
            },()=>{
                new Swiper('.swiper-container',{
                    autoplay:true,
                    loop:true,
                    delay:2000,
                    pagination:{
                        el:'.swiper-pagination'
                    }
                })
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    state = {
        swiper_list:[]//轮播图列表
    }
    render() {
        return (
            <div className='cshop-index'>
                {/* 首页顶部导航开始 */}
                <div className='index-header'>
                    <i className="icon icon-menu"></i>
                    <span className='header-title'>云购</span>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 首页顶部导航结束 */}
                {/* 首页轮播图开始 */}
                <div className='index-swiper'>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className="swiper-slide"> <img src={v.loopimg_url} alt={v.loopimg_title} /></div>)
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 首页轮播图结束 */}
            </div>
        )
    }
}
