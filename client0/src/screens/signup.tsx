import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card, InputGroup, FormControl} from "react-bootstrap";

class Signup extends React.Component {
	render() {
		return (
			<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				<Col md='6' className='pt-5'>
					<Card className='shadow'><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							SMART SWIMMING POOL
						</Card.Title>
						<Card.Text className=''>
						<InputGroup className="mt-4 mb-2">
							<FormControl
								placeholder="Введите email"/>
							</InputGroup>
							<InputGroup className="mb-2">
							<FormControl
								placeholder="Введите пароль"/>
							</InputGroup>
							<InputGroup className="mb-4">
							<FormControl
								placeholder="Введите пароль ещё раз"/>
							</InputGroup>
							<Col className='mt-3'><Link to='/signIn'><Button variant="primary" className='shadow-lg'>
								Регистрация
							</Button></Link></Col>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
		</Container>
		)
	}
}

export default Signup;