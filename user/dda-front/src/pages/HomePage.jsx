import React, { Component, Fragment } from 'react'
import {Col} from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import NavMenuMobile from '../components/common/NavMenuMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';

export class HomePage extends Component {

    
    render() {
        return (
            <Fragment>
                <NavMenuMobile></NavMenuMobile>

            <Col lg={12} md={12} sm={12} xs={12}>
               
                       <HomeTopMobile/>
                  
</Col>
            </Fragment>
        )
    }
}

export default HomePage