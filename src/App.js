import React from 'react';
import logo from './logo.svg';
import './App.scss';
// 引入tabbar组件
import Tabbar from './components/tabbar/TabBar'
import Home from './components/home/Home'
import Community from './components/community/Community'
import Cart from './components/cart/Cart'
import My from './components/my/My'
import Category from './components/category/Category'
import { HashRouter as Router, Route,Redirect,Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Tabbar></Tabbar> */}
      <Router>
        <Switch>
          <Route exact path="/" render={() =><Tabbar><Home></Home></Tabbar> }></Route>
          <Route exact path="/community" render={() =><Tabbar><Community></Community></Tabbar> }></Route>
          <Route exact path="/cart" render={() =><Tabbar><Cart></Cart></Tabbar> }></Route>
          <Route exact path="/my" render={() =><Tabbar><My></My></Tabbar> }></Route>
          <Route exact path="/category" render={() => <Category></Category> }></Route>
          <Redirect to='/'></Redirect>
        </Switch>
        {/* <Route exact path="/" component={Home}></Route>
        <Route exact path="/community" component={Community}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/my" component={My}></Route> */}
      </Router>
    </div>
  );
}

export default App;
