import React, { Component } from 'react'
import './Home.scss'
import axios from '../../utils/axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
// import images from '../../images'
export default class Home extends Component {
    componentWillUnmount(){
        this.swiper = null
    }
    componentDidMount(){
        // 轮播图接口
        axios.get('/getIndexLoopimg').then(res=>{
            // console.log(res)
            this.setState({
                swiper_list:res.wdata
            },()=>{
                this.swiper = new Swiper('.swiper-container',{
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
        // 精选促销产品接口
        axios.get('/getHotProducts').then(res=>{
            console.log(res)
            this.setState({
                hotproduct_list:res.wdata
            })
        })
    }
    state = {
        swiper_list:[],//轮播图列表
        navList : [ //导航栏列表
            {
                'id':1,
                'title':'大聚惠',
                'src':'nav01.png'
            },
            {
                'id':2,
                'title':'海外购',
                'src':'nav02.png'
            },
            {
                'id':3,
                'title':'超市百货',
                'src':'nav03.png'
            },
            {
                'id':4,
                'title':'厂家直销',
                'src':'nav04.png'
            },
            {
                'id':5,
                'title':'美食娱乐',
                'src':'nav05.png'
            },
        ],
        customerList: [ //商城用户
            {
                'id':1,
                'title':'海绵包包',
                'src':'custom01.jpg'
            },
            {
                'id':2,
                'title':'面包烤糊了',
                'src':'custom02.png'
            },
            {
                'id':3,
                'title':'李一生L',
                'src':'custom03.png'
            },
            {
                'id':4,
                'title':'大祥哥来了',
                'src':'custom04.png'
            }
        ],
        hotproduct_list:[],//精选促销产品列表
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
                {/* 首页导航栏开始 */}
                <div className='index-nav'>
                    <div className='nav-list'>
                            {
                                this.state.navList.map(v =>  <div className='item' key={v.id}>
                                    <img src={require(`../../images/${v.src}`)}></img>
                                    <span>{v.title}</span>
                                    </div>)
                            }
                    </div>
                </div>
                {/* 首页导航栏结束 */}
                {/* 首页商城用户开始 */}
                <div className='index-customer'>
                    <h1>商城用户</h1>
                    <div className='customer-list'>
                                {
                                    this.state.customerList.map(v =>  <div className='item' key={v.id}>
                                        <img src={require(`../../images/${v.src}`)}></img>
                                        <span>{v.title}</span>
                                        </div>)
                                }
                    </div>
                </div>
                {/* 首页商城用户结束 */}
                {/* 首页精品促销开始 */}
                <div className="index-goods">
                    <h1>精选促销</h1>
                    <div className="goos_list">
                        {
                            this.state.hotproduct_list.map((v,i)=>{
                                return (<div className="item" key={i}>
                                    <img src={v.product_url} alt=""/>
                                    <p>{v.product_name}</p>
                                    <div className="item-price">
                                        <span className="discount">￥{v.product_price}</span>
                                        <span className="origin">￥{v.product_origin_price}</span>
                                    </div>
                                </div>)
                            })
                        }
                    </div>

                </div>
                {/* 首页精品促销结束 */}

            </div>
        )
    }
}
