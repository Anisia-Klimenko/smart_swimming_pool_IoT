import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card, InputGroup, FormControl} from "react-bootstrap";

class Signin extends React.Component {
	render() {
		return (
			<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				<Col md='5' className='pt-5'>
					<Card className='shadow'><Card.Body className=''>
						<Card.Title className='pt-2 pb-2'>
							SMART SWIMMING POOL
						</Card.Title>
						<Card.Text className=''>
							<InputGroup className="mt-4 mb-2">
							<FormControl
								placeholder="Введите логин"/>
							</InputGroup>
							<InputGroup className="mb-4">
							<FormControl
								placeholder="Введите пароль"/>
							</InputGroup>
							<Col className='mt-3'><Link to='signIn'><Button variant="primary" className='shadow-lg'>
								Войти
							</Button></Link></Col>
							<Col className='mt-2'><Link to='signIn'><Button variant="link">
								Зарегистрироваться
							</Button></Link></Col>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
		</Container>
		)
	}
}

export default Signin;