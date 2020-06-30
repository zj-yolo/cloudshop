import React, { Component } from 'react'
import './TabBar.scss'
// 引入路由
import {withRouter} from 'react-router-dom'
class Tabbar extends Component {
    state = {
        activeTab:"home"
    }
    // 装载完成，在render之后执行
    componentDidMount() {
        let activeTab = window.location.hash.split('/')[1]
        if(activeTab === '' || activeTab === 'community' || activeTab === 'cart' || activeTab === 'my'){
            if(activeTab === ''){
                activeTab = 'home'
            }
            this.setState({
                activeTab
            })
        }else{
            this.setState({
                activeTab:'home'
            })
        }
    }
    //tab点击事件
    handleTabChange = (tab) => {
        let tabMap = {
            'home':{
                path:'/'
            },
            'community':{
                path:'/community'
            },
            'cart':{
                path:'/cart'
            },
            'my':{
                path:'/my'
            }
        }
        this.props.history.push(tabMap[tab].path)
        this.setState({
            activeTab:tab
        })
        // console.log(this.state.activeTab)
    }
    
    render() {
        return (
            <div className='cshop-tabbar'>
                {/* tabbar内容开始 */}
                <div className='tabbar-contnet'>
                    {this.props.children}
                </div>
                {/* tabbar内容结束 */}
                {/* tabbar底部工具栏开始 */}
                <div className='tabbar-footer'>
                    <div className='footer-home' onClick={this.handleTabChange.bind(this,'home')}>
                        <i className={this.state.activeTab==='home'?"icon icon-home-o":"icon icon-home"}></i>
                        <span className={this.state.activeTab==='home'?'active item-title':'item-title'}>首页</span>
                    </div>
                    <div className='footer-community' onClick={this.handleTabChange.bind(this,'community')}>
                        <i className={this.state.activeTab==='community'?"icon icon-community":"icon icon-community-o"}></i>
                        <span className={this.state.activeTab==='community'?'active item-title':'item-title'}>社区</span>
                    </div>
                    <div className='footer-cart' onClick={this.handleTabChange.bind(this,'cart')}>
                        <i className={this.state.activeTab==='cart'?"icon icon-cart-o":"icon icon-cart"}></i>
                        <span className={this.state.activeTab==='cart'?'active item-title':'item-title'}>购物车</span>
                    </div>
                    <div className='footer-my' onClick={this.handleTabChange.bind(this,'my')}>
                        <i className={this.state.activeTab==='my'?"icon icon-my-o":"icon icon-my"}></i>
                        <span className={this.state.activeTab==='my'?'active item-title':'item-title'}>我的</span>
                    </div>
                </div>
                {/* tabbar底部工具栏结束 */}

            </div>
        )
    }
}
export default withRouter(Tabbar)