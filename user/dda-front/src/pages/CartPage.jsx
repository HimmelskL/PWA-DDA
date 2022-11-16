import React, { Component, Fragment } from 'react';
import Cart from '../components/cart/Cart';
import NavMenuMobile from '../components/common/NavMenuMobile';

export class CartPage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuMobile />

        <Cart></Cart>

      </Fragment>
    )
  }
}

export default CartPage