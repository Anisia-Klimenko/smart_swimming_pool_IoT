import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card, InputGroup, FormControl, Form, Alert } from "react-bootstrap";
import { users } from '../emulation';

let login: string;
let password: string;
const handleLoginChange: React.ChangeEventHandler<HTMLInputElement> =
(event) => {
	login = event.target.value;
}
const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
(event) => {
	password = event.target.value;
}

function LoginPasswd(login: any, passwd: any, users: { id: number; login: string; password: string; }[]) {
	let logins = users.map(user => user.login);
	let passwds = users.map(user => user.password);
	let ids = users.map(user => user.id);
	for (let i in ids)
	{
		if (logins[i] === login && passwds[i] === passwd)
			return true;
	}
	return false;
}

function SignInWin() {
	const [validated, setValidated] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void;}) => {
		if (LoginPasswd(login, password, users) === false) {
			event.preventDefault();
			// setValidated(false);
			event.stopPropagation();
			setShowMessage(true);
		}
		else
		{
			navigate('/sportsman');
			setShowMessage(false);
			setValidated(true);
		}
	}

	// useEffect(() => {
	// 	if (validated && LoginPasswd(login, password, users) === true) {
	// 		navigate('/sportsman')
	// 	}
	// 	else 
	// 		setValidated(false);
	// }, [navigate, validated])

	return (
		<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Form 
				noValidate 
				validated={validated} 
				onSubmit={handleSubmit} 
				autoComplete="off">
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				<Col md='6' className='pt-5'>
					<Card className='shadow'><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							SMART SWIMMING POOL
						</Card.Title>
						<Card.Text>
						<Alert
							key='danger'
							variant='danger'
							show={showMessage}>
							Неверный логин или пароль
						</Alert>
						<Form.Group className="mt-4 mb-2">
						<InputGroup hasValidation>
							<Form.Control
								placeholder="Введите логин"
								id="login"
								type="text"
              					onChange={handleLoginChange}
								required/>
							<Form.Control.Feedback type="invalid">
								Введите логин
							</Form.Control.Feedback>
						</InputGroup>
						</Form.Group>
						<Form.Group className="mb-4">
							<InputGroup hasValidation>
							<FormControl
								placeholder="Введите пароль"
								id="password"
								type="text"
              					onChange={handlePasswordChange}
								required/>
							<Form.Control.Feedback type="invalid">
								Введите пароль
							</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
							<Col className='mt-3'><Button variant="primary" className='shadow-lg' type='submit'>
								Войти
							</Button></Col>
							<Col className='mt-2'><Link to='/signUp'><Button variant="link">
								Зарегистрироваться
							</Button></Link></Col>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
			</Form>
		</Container>
	)
}

class Signin extends React.Component {
	render() {
		return (<SignInWin/>)
	}
}

export default Signin;