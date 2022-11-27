import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
import Categories from '../components/home/Categories';
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import Info from '../pages/Info';
import UserLoginPage from '../pages/UserLoginPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import SearchPage from '../pages/SearchPage';
import HomeTopMobile from '../components/home/HomeTopMobile';


class AppRoute extends Component {
     render() {
          return (
               <Fragment>

                    <Switch>
                         <Route exact path='/' render={(props) => <HomePage {...props} key={Date.now()}/>} />
                         <Route exact path='/login' render={(props) => <UserLoginPage {...props} key={Date.now()}/>} />
                         <Route exact path='/register' render={(props) => <RegisterPage {...props} key={Date.now()}/>} />
                         <Route exact path='/forget' render={(props) => <ForgetPasswordPage {...props} key={Date.now()}/>} />
                         <Route exact path='/reset/:id' render={(props) => <ResetPasswordPage {...props} key={Date.now()}/>} />
                         <Route exact path="/profile" render={(props) => <ProfilePage {...props} key={Date.now()} /> } />

                         <Route exact path='/category' component={Categories} />
                         <Route exact path='/product' component={HomeTopMobile} />
                         <Route exact path='/cart' component={CartPage} />
                         <Route exact path='/info' component={Info} />
                         <Route exact path='/productcategory/:category' component={ProductCategoryPage} />
                         <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} /> } /> 
                    </Switch>

               </Fragment>
          )
     }
}

export default AppRoute
