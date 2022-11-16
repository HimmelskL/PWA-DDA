import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
import Register from '../components/common/Register';
import Categories from '../components/home/Categories';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import Info from '../pages/Info';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
     render() {
          return (
               <Fragment>

                    <Switch>
                         <Route exact path='/' component={HomePage} />
                         <Route exact path='/login' component={UserLoginPage} />
                         <Route exact path='/register' component={Register} />
                         <Route exact path='/category' component={Categories} />
                         <Route exact path='/cart' component={CartPage} />
                         <Route exact path='/info' component={Info} />
                    </Switch>

               </Fragment>
          )
     }
}

export default AppRoute
