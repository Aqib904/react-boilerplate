import React from 'react'
import Navbar from '../navbar/Navbar'
import {
    Container,Row,Col,Button
 } from "reactstrap"
 import rightImg from '../../assets/img/banner-alarm.png'
export default function Header() {
  return (
    <>
    <Navbar/>
    <Container fluid className='header'>
        <Row>
            <Col >
                <h1 className='mx-5 my-5 text-1 '>ALTIJD EEN VEILIG GEVOEL. Uit en thuis.</h1>
                <h1  className='mx-5 text-2 '>Wilt u het alarmsysteem van Verisure uitproberen?</h1>
                <h1   className='mx-5 text-3 '>Wij zoeken 250 vrijwilligers</h1>
                <Button className='mx-5 my-5 button px-5 ' >Ja, dat wil ik!<i className="fa fa-arrow-circle-right icon px-3 " ></i></Button>
            </Col>
            <Col ><img className=' right-img'src={rightImg} alt="banner alarm"/></Col>
        </Row>
    </Container>
    </>
  )
}
