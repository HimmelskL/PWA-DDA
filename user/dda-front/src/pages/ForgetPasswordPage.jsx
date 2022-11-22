import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ForgetPassword from '../components/common/ForgetPassword';


export class ForgetPasswordPage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuMobile />

        <div>
            <ForgetPassword/>
        </div>
    </Fragment>
    )
  }
}

export default ForgetPasswordPage