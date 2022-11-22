import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Register from '../components/common/Register';

export class RegisterPage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuMobile />

        <div>
            <Register/>
        </div>
    </Fragment>
    )
  }
}

export default RegisterPage