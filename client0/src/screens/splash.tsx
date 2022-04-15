import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card} from "react-bootstrap";

class Splash extends React.Component {
	render() {
	return (
		<Container className='container-fluid text-center d-flex flex-column'>
			<Row className="justify-content-md-center align-items-center flex-fill">
				<Col md='5' className='pt-5'>
					<Card className='shadow'><Card.Body className='pt-5 mt-3'>
						<Card.Title className='pb-5'>
							SMART SWIMMING POOL
						</Card.Title>
						<Card.Text className='pb-5'>
							<Button variant="primary" className='shadow-lg'>
								Начать
							</Button>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
		</Container>
	)
}}

export default Splash;