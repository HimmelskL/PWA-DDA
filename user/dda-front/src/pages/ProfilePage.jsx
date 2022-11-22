import React, { Component, Fragment } from 'react';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Profile from '../components/common/Profile';

export class ProfilePage extends Component {
  render() {
    return (
        <Fragment>
        <NavMenuMobile />

        <div>
            <Profile/>
        </div>
    </Fragment>
    )
  }
}

export default ProfilePage