import React, { useReducer, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Form} from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from "yup";

type State = {
	username: string
	password:  string
	isButtonDisabled: boolean
	helperText: string
	isError: boolean
};
  
const initialState:State = {
	username: '',
	password: '',
	isButtonDisabled: true,
	helperText: '',
	isError: false
};

type Action = { type: 'setUsername', payload: string }
| { type: 'setPassword', payload: string }
| { type: 'setIsButtonDisabled', payload: boolean }
| { type: 'loginSuccess', payload: string }
| { type: 'loginFailed', payload: string }
| { type: 'setIsError', payload: boolean };

  const reducer = (state: State, action: Action): State => {
switch (action.type) {
  case 'setUsername': 
	return {
	  ...state,
	  username: action.payload
	};
  case 'setPassword': 
	return {
	  ...state,
	  password: action.payload
	};
  case 'setIsButtonDisabled': 
	return {
	  ...state,
	  isButtonDisabled: action.payload
	};
  case 'loginSuccess': 
	return {
	  ...state,
	  helperText: action.payload,
	  isError: false
	};
  case 'loginFailed': 
	return {
	  ...state,
	  helperText: action.payload,
	  isError: true
	};
  case 'setIsError': 
	return {
	  ...state,
	  isError: action.payload
	};
}
  }
function SignInWin() {
  	const [state, dispatch] = useReducer(reducer, initialState);

  	useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  	}, [state.username, state.password]);
	
	const handleLogin = () => {
		if (state.username === 'admin' && state.password === 'admin') {
		  dispatch({
			type: 'loginSuccess',
			payload: 'Login Successfully'
		  });
		} else {
		  dispatch({
			type: 'loginFailed',
			payload: 'Incorrect username or password'
		  });
		}
	};

	const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

	const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
	
	let users = [
		{id: 1, login: "admin", password: "admin"},
		{id: 2, login: "user", password: "user"}
	]

	// __________________________________________________

	const [validated, setValidated] = useState(false);

  	const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  	};
	
	const formik = { Formik };
	const schema = yup.object().shape({
		login: yup.string().required(),
		password: yup.string().required()
	})

	// class Test extends React.Component {
	// 	constructor(props) {
	// 	  super(props);
	  
	// 	  this.state = {
	// 		fields: {},
	// 		errors: {},
	// 	  };
	// 	}
	// }

	function submitForm() {
		
	}

	return (
		// <Formik 
		// 	validationSchema={schema}
		// 	onSubmit={submitForm}
		// 	initialValues={{
		// 		login: '',
		// 		password: ''
		// 	}}>
		<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Form noValidate validated={validated} onSubmit={handleSubmit} autoComplete="off">
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				<Col md='6' className='pt-5'>
					<Card className='shadow'><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							SMART SWIMMING POOL
						</Card.Title>
						<Card.Text>
						<Form.Group className="mt-4 mb-2" controlId='validationLogin'>
						<InputGroup hasValidation>
							<Form.Control
								placeholder="Введите логин"
								id="login"
								type="text"
              					onChange={handleUsernameChange}
								required/>
							<Form.Control.Feedback type="invalid">
								Введите логин
							</Form.Control.Feedback>
						</InputGroup>
						</Form.Group>
						<Form.Group className="mb-4" controlId='validationPasswd'>
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
							{/* <Col className='mt-3'><Link to='/sportsman'><Button variant="primary" className='shadow-lg' type='submit'>
								Войти
							</Button></Link></Col> */}
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
		// </Formik>
	)
}

class Signin extends React.Component {
	render() {
		return (
			<SignInWin/>
		)
	}
}

export default Signin;