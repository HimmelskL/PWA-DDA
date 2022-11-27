import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Badge, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import NavMenuMobile from '../common/NavMenuMobile';

class Category extends Component {
  render() {

    const MyList = this.props.ProductData;
    const Category = this.props.Category;
    const MyView = MyList.map((ProductList, i) => {

      return <Col className="col-category" xl={2} lg={2} md={2} sm={6} xs={6}>
        {/* <Link to={"/productdetails/" + ProductList.id}> */}
          <Card className="h-100 w-100 text-center">
            <Card.Body>
              <h5 className='category-name'> {ProductList.code} {ProductList.product} </h5>
              <h6><Badge bg="primary" pill>
                Stock: {ProductList.stock}
              </Badge></h6>
              <p className="product-name-on-card">
                P.U. ${ProductList.unitary_price}
                <p>
                  IVA ${ProductList.iva}
                  <p>
                    Desc. {ProductList.discount} %
                  </p>
                  <p>
                    Importe ${ProductList.amount}  <a href=""><i className='fa fa-cart-plus' style={{ color: 'white' }}></i></a>
                  </p>
                </p>
              </p>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className='Accordion-Header'>Descripción</Accordion.Header>
                  <Accordion.Body className='Accordion-Body'>
                    <h6>{ProductList.description}</h6>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </Card.Body>
          </Card>

        {/* </Link> */}
      </Col >

    });
    return (
      <Fragment>
        <NavMenuMobile></NavMenuMobile>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> {Category} </h2>
          </div>
          <Row>
            {MyView}
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default Category