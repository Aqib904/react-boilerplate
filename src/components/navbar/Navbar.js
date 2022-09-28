import React from 'react'
import {
   Container,Row,Col
} from "reactstrap"
  import logo from '../../assets/img/logo.png'
export default function Navbar() {
  return (
    <Container fluid className='navbar'>
        <Row>
            <Col>
              <img className='mx-5'src={logo} alt="logo" />
            </Col>
        </Row>
    </Container>
  )
}
