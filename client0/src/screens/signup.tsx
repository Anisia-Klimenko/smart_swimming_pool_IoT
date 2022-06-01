import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Card, InputGroup, FormControl, Form, Alert } from "react-bootstrap";
import { users } from '../emulation';

let login: string;
let password1: string;
let password2: string;
const handleLoginChange: React.ChangeEventHandler<HTMLInputElement> =
	(event) => {
		login = event.target.value;
	}
const handlePassword1Change: React.ChangeEventHandler<HTMLInputElement> =
	(event) => {
		password1 = event.target.value;
	}
const handlePassword2Change: React.ChangeEventHandler<HTMLInputElement> =
	(event) => {
		password2 = event.target.value;
	}

function SignupWin() {
	const [validated, setValidated] = useState(false);
	const [showMessagePass, setShowMessagePass] = useState(false);
	const [showMessageEmpty, setShowMessageEmpty] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
		if (password1 !== password2) {
			event.preventDefault();
			event.stopPropagation();
			setShowMessagePass(true);
			setShowMessageEmpty(false);
		}
		else if (!login || !password1 || !password2) {
			event.preventDefault();
			event.stopPropagation();
			setShowMessageEmpty(true);
			setShowMessagePass(false);
		}
		else {
			let ids = Math.max.apply(users.map(user => user.id)) + 1;
			users.push({ id: ids, login: login, password: password1 });
			navigate('/signin');
			setShowMessagePass(false);
			setShowMessageEmpty(false);
			setValidated(true);
		}
	}
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
									show={showMessagePass}>
									Пароли не совпадают
								</Alert>
								<Alert
									key='danger'
									variant='danger'
									show={showMessageEmpty}>
									Заполните все поля
								</Alert>
								<InputGroup className="mt-4 mb-2">
									<FormControl
										placeholder="Введите логин"
										onChange={handleLoginChange}
										required />
								</InputGroup>
								<InputGroup className="mb-2">
									<FormControl
										placeholder="Введите пароль"
										onChange={handlePassword1Change}
										required />
								</InputGroup>
								<InputGroup className="mb-4">
									<FormControl
										placeholder="Введите пароль ещё раз"
										onChange={handlePassword2Change}
										required />
								</InputGroup>
								<Col className='mt-3'><Button variant="primary" className='shadow-lg' type='submit'>
									Регистрация
								</Button></Col>
							</Card.Text>
						</Card.Body></Card>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

class Signup extends React.Component {
	render() {
		return (<SignupWin />)
	}
}

export default Signup;