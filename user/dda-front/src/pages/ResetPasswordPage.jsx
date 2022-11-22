import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ResetPassword from '../components/common/ResetPassword';


export class ResetPasswordPage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuMobile />

        <div>
            <ResetPassword/>
        </div>
    </Fragment>
    )
  }
}

export default ResetPasswordPage