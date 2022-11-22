import React, { Component, Fragment, useState } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom';
import Logo from '../../assets/images/DDA-72x72.png';
import NavMenuMobile from './NavMenuMobile';



class NavMenuDesktop extends Component {
     render() {
          return (
               <Fragment>
                    <div className='TopSectionDown'>
                         <Navbar fixed={'top'}>
                              <Container fluid={"true"} className='fixed-top shadow p-2 mb-0'>
                                   <Row className='nav-brand'>
                                        <Col lg={4} md={4} sm={12} xs={12}>
                                             <img src={Logo} className='logo' />
                                             <Link to='/' className='h4 btn'><h4>Depósito Dental Anáhuac</h4></Link>
                                        </Col>

                                        <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                                             <div className='input-group w-100'>
                                                  <input type="text" className='form-control'></input>
                                                  <Button type='button' className='btn site-btn'><i className='fa fa-search'></i></Button>
                                             </div>
                                        </Col>

                                        <Col lg={4} md={4} sm={12} xs={12} className='p-1 mt-1'>
                                                  <Link to='/login' className='h4 btn'>Iniciar sesión</Link>
                                                  <Link to='/cart' className='cart-btn'><i className='fa fa-shopping-cart'></i></Link>
                                                  <NavMenuMobile></NavMenuMobile>
                                        </Col>

                                   </Row>
                                 
                              </Container>
                              
                         </Navbar>
                         
                    </div>
               </Fragment>
          )
     }
}

export default NavMenuDesktop
