import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import UserLogin from '../components/common/UserLogin';

export class UserLoginPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuMobile />

                <div>
                    <UserLogin></UserLogin>
                </div>
            </Fragment>
        )
    }
}

export default UserLoginPage