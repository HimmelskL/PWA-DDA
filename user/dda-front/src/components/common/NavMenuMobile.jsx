import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../../assets/images/DDA-72x72.png';




class NavMenuMobile extends Component {

     constructor() {
          super();
          this.state = {
               SideNavState: "sideNavClose",
               ContentOverState: "ContentOverlayClose"
          }
     }

     MenuBarClickHandler = () => {
          this.SideNavOpenClose();
     }

     ContentOverLayClickHandler = () => {
          this.SideNavOpenClose();
     }

     SideNavOpenClose = () => {
          let SideNavState = this.state.SideNavState;
          let ContentOverState = this.state.ContentOverState;
          if (SideNavState === "sideNavOpen") {
               this.setState({
                    SideNavState: "sideNavClose",
                    ContentOverState: "ContentOverlayClose"
               })
          } else {
               this.setState({
                    SideNavState: "sideNavOpen",
                    ContentOverState: "ContentOverlayOpen"
               })
          }
     }

     render() {

          return (
               <Fragment>
                    <div className='TopSectionDown'>

                         <Container fluid={"true"} className='fixed-top shadow p-2 mb-0'>
                              <Row className='nav-brand'>
                                   <Col lg={4} md={4} sm={12} xs={12}>
                                        <img src={Logo} className='logo' />
                                        <Link to='/' className='h4 btn'><h5 className='nav-login'>Depósito Dental Anáhuac</h5></Link>
                                   </Col>

                                   <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                                        <div className='input-group w-100'>
                                             <input type="text" className='form-control'></input>
                                             <Button type='button' className='btn site-btn'><i className='fa fa-search'></i></Button>
                                        </div>
                                   </Col>

                                   <Col lg={4} md={4} sm={12} xs={12} className='p-1 mt-1'>
                                        <Link to='/login' className='h4 btn'><h5 className='nav-login'>Iniciar sesión</h5></Link>
                                        <Link to='/cart' className='cart-btn'><i className='fa fa-shopping-cart'></i></Link>
                                        <Button onClick={this.MenuBarClickHandler} className='cart-btn' size="lg"><i className='fa fa-bars'></i></Button>
                                   </Col>

                              </Row>
                         </Container>

                         <div className={this.state.SideNavState} id="menu">
                              <div id="wrapper" className="toggled">
                                   <div id="sidebar-wrapper">
                                        <ul className="sidebar-nav">
                                             <li>
                                                  <Link to='/register' className='menu-link'><h5> Registro </h5></Link>
                                             </li>
                                             <li>
                                                <Link to='/category' className='menu-link'><h5> Categorías </h5></Link>  
                                             </li>
                                             <li>
                                                <Link to='/info' className='menu-link'><h5> Más información </h5></Link>  
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                              <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

                              </div>
                         </div>
                    </div>

               </Fragment>
          )
     }
}

export default NavMenuMobile
