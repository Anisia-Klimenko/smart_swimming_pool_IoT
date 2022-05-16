import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal, Placeholder, Alert} from "react-bootstrap";
import { trainings } from '../emulation'

type Rows = {
	time: number; pulsemax: number; pulsemin: number;
}

type Train = {
	id: number; name: string; rows: Array<Rows>;
}

const blankTrain : Train = {
	id: 0,
	name: "",
    rows:[{
        time: 0,
        pulsemax: 0,
        pulsemin: 0
    }]
}

let currentTrain : Train;
let time: string | number | string[] | undefined, pulsemin: string | number | string[] | undefined, pulsemax : number;

function TrainingWin() {
	const [showCreateName, setShowCreateName] = useState(false);
	const [showChange, setShowChange] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResult] = useState(trainings);
	const [isActive, setIsActive] = useState(true);
	const [newTraining, setNewTraining] = useState(blankTrain);
	const [curr, setCurr] = useState({
		id: 0,
		name: "",
    	rows:[{
			time: 0,
			pulsemax: 0,
			pulsemin: 0
    	}]
	})

	const handleListItem = (train: Train) => {
		setIsActive(false);
		setCurr({id: train.id, name: train.name, rows: train.rows});
		currentTrain = curr;
	}

	const handleChangeSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setSearchInput(event.target.value);
	}

	const handleChangeNewName = (event: { target: { value: any; }; }) => {
		setNewTraining(state => ({...state, name: event.target.value}))
	}

	const handleInputChange = (key: string, value: any) => {
		setNewTraining(state => ({...state, [key]: value}));
		// setNewTraining(state => ({...state, [key]: value}));
	}

	const handleCreateTraining = () => {
		if (newTraining.name === '') {
			setShowMessage(true);
		}
		else {
			setShowMessage(false);
			setShowCreateName(false)
			setShowChange(true); 
			let ids = Math.max(...trainings.map(train => train.id)) + 1;
			trainings.push({
				id: ids,
				name: newTraining.name,
				rows: newTraining.rows
			});
			setCurr(newTraining);
		}
		// setShowChange(false);
	}

	const handleDeleteTrain = () => {
		let ids = trainings.map(man => man.id).indexOf(curr.id);
		if (ids > -1) {
			trainings.splice(ids, 1);
		}
		setShowDelete(false);
		setShowChange(false);
	}

	useEffect(() => {
		const result = trainings.filter(train => train.name.toLowerCase().includes(searchInput.toLowerCase()));
		setSearchResult(result);
	}, [searchInput])

	return (
		<Container className='pt-5 container-fluid text-center d-flex flex-column'>
		<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
			{/* Карточка со списком тренировок */}
			<Col md='6' className='pt-5'>
				<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-2'>
						Выбор тренировки
					</Card.Title>
					<Card.Text>
					<InputGroup className="mt-4 mb-2">
						<FormControl
							placeholder="Поиск"
							value={searchInput}
							onChange={handleChangeSearch}/>
					</InputGroup>
					<ListGroup className='listgroup-scroll'>
						{searchResult.map(train => <ListGroup.Item action id={train.id.toString()} onClick={() => handleListItem(train)}>{train.name}</ListGroup.Item>)}
					</ListGroup>
					<Stack direction="horizontal" className='justify-content-between mt-4'>
						<Link to='/sportsman'><Button variant="outline-primary" className='shadow-lg'>
							Назад
						</Button></Link>
						<Button variant="primary" className='shadow-lg' onClick={() => setShowCreateName(true)}>
							Создать
						</Button>
					</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			{/* Карточка с информацией о тренировке */}
			<Col md='6' className={isActive ? 'pt-5 d-none' : 'pt-5'}>
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-2'>
						<p>{curr.name === '' ? 'Название тренировки' : curr.name}</p>
					</Card.Title>
					<Card.Text>
						<div className='table-scroll mb-3'>
						<Table striped bordered hover className="justify-content-start" >
						<thead>
							<tr>
							<th>Время, сек</th>
							<th>Пульс (мин)</th>
							<th>Пульс (макс)</th>
							</tr>
						</thead>
						<tbody>
							{curr.rows.map(row => <tr>
							<td>{row.time}</td>
							<td>{row.pulsemin}</td>
							<td>{row.pulsemax}</td>
							</tr>)}
						</tbody>
						</Table>
						</div>
						<Stack direction="horizontal" className='justify-content-between mt-3'>
							<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowChange(true)}>Редактировать</Button>
							<Link to='/startWorkout'><Button variant="primary" className='shadow-lg'>Выбрать</Button></Link>
						</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			{/* Пустая карточка загрузки */}
			<Col md='6' className={isActive ? 'pt-5' : 'pt-5 d-none'}>
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-4'>
						<p>Выберите тренировку</p>
					</Card.Title>
					<Card.Text>
						<Placeholder as={Card.Title} animation="glow">
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12}className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
						</Placeholder>
						<Stack direction="horizontal" className='justify-content-between mt-4'>
							<Placeholder.Button variant="outline-primary" xs={4} className='shadow-lg'></Placeholder.Button>
							<Placeholder.Button variant="primary" xs={3} className='shadow-lg'></Placeholder.Button>
						</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
		</Row>
		{/* Модальное окно - удалить тренировку */}
		<Modal
			show={showDelete}
			onHide={() => setShowDelete(false)}
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
					Удалить тренировку
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Вы уверены, что хотите удалить тренировку {curr.name}?
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
				<Button variant='outline-primary' className='shadow-lg' onClick={() => setShowDelete(false)}>Отмена</Button>
				<Button variant="danger" className='shadow-lg' onClick={() => {handleDeleteTrain(); }}>Удалить</Button>
			</Modal.Footer>
		</Modal>
		{/* Модальное окно - Добавить тренировку */}
		<Modal 
			show={showCreateName} 
			onHide={() => {setShowCreateName(false); setShowMessage(false);}} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Добавить тренировку</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<InputGroup>
				<FormControl 
					placeholder="Введите название"
					value={newTraining.name}
					onChange={handleChangeNewName}
					required/>
			</InputGroup>
			<Alert
				key='danger'
				variant='success'
				show={showMessage}
				className='mt-2'>
				Название не может быть пустым
			</Alert>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreateName(false)}>Отмена</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => {handleCreateTraining()}}>Далее</Button>
			</Modal.Footer>
		</Modal>
		{/* Модальное окно - Редактировать тренировку */}
		<Modal 
			show={showChange} 
			onHide={() => setShowChange(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>{curr.name === '' ? 'Название тренировки' : curr.name}</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<div className='table-scroll mb-3'>
			<Table striped bordered hover className="justify-content-start" >
			<thead>
				<tr>
				<th>Время, сек</th>
				<th>Пульс (мин)</th>
				<th>Пульс (макс)</th>
				</tr>
			</thead>
			<tbody>
				{curr.rows.map(row => <tr>
				<td>{row.time}</td>
				<td>{row.pulsemin}</td>
				<td>{row.pulsemax}</td>
				</tr>)}
			</tbody>
			</Table>
			</div>
			<InputGroup>
				<FormControl 
					placeholder="Время, сек"
					value={time}
					type="number"
					required/>
				<FormControl 
					placeholder="Пульс (мин)"
					value={pulsemin}
					type="number"
					required/>
				<FormControl 
					placeholder="Пульс (макс)"
					value={pulsemax}
					type="number"
					required/>
				<Button variant='success'>+</Button>
			</InputGroup>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="danger" className='shadow-lg mb-2' onClick={() => setShowDelete(true)}>Удалить тренировку</Button>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowChange(false)}>Отмена</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => setShowChange(false)}>Сохранить</Button>
			</Modal.Footer>
		</Modal>
	</Container>
	);
}

class Training extends React.Component {
	render() {
		return (<TrainingWin />
		)
	}
}

export default Training;