import React, { Component, Fragment } from 'react'
import {Col} from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import NavMenuMobile from '../components/common/NavMenuMobile';

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuMobile></NavMenuMobile>

            <Col lg={12} md={12} sm={12} xs={12}>
                <div className='contenedor-productos'>

                    <div className='contenedor-compras'>
                        <Table className='table'>
                            <thead className='table-head'>
                                <tr>
                                    <th>Código</th>
                                    <th>Stock</th>
                                    <th>Producto</th>
                                    <th>Categoría</th>
                                    <th>Description</th>
                                    <th>Valor unitario</th>
                                    <th>IVA</th>
                                    <th>Descuento</th>
                                    <th>Importe</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='table-body'>
                                <tr>
                                    <td>H145F8</td>
                                    <td>13</td>
                                    <td>Resina</td>
                                    <td>General</td>
                                    <td>Resina en polvo</td>
                                    <td>$ 13.50</td>
                                    <td>$ 0.13</td>
                                    <td>0 %</td>
                                    <td>$ 13.63</td>
                                    <td><i className='fa fa-cart-plus' style={{color: 'white'}}></i></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
</Col>
            </Fragment>
        )
    }
}

export default HomePage