import { Container,Row,Col } from 'reactstrap';
import offer from '../assets/img/offer.png'
const AdminView = props => {
	return (
		<Container fluid className='triangle'>
			 <Row>
            <Col>
			<h1 className='triangle-text'> Profiteer nu van de ZOMER-AANBIEDING!</h1>
            </Col>
        </Row>
		<Row>
			<Col>
			<Col className='left-col'>
				<Col className='star-bg '>
					<h3 className='text-center text-white pt-5'>
						<b>
							Nu tot
							<br/>
							<b>40%</b>
							<br/>
							<b>Korting</b>
						</b>
					</h3>
				</Col>
				<Col className='circle'>
					<h2 className='text-center mt-5 text-white'>
					<b>
							Nu Met
							<br/>
							<span className='gratis-span'>GRATIS</span>
							<br/>
							<b>VIDEO</b>
							<br/>
							<b>DEURBEL</b>
						</b>
					</h2>
				</Col>
				</Col>
				<Col>
					<Col className=' sm-12 offer' >
					<img  className='offer-img' src={offer} alt="offer"/>
					</Col>		
				</Col>
			</Col>
			<Col>
				<Col>

				</Col>
			</Col>
		
		</Row>
		</Container>
	);
};

export default AdminView;
