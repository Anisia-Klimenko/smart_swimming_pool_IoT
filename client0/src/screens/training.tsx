import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { currentSportsman } from './sportsman';
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal, Placeholder} from "react-bootstrap";
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

function TrainingWin() {
	const [showCreateName, setShowCreateName] = useState(false);
	const [showCreate, setShowCreate] = useState(false);
	const [showChange, setShowChange] = useState(false);
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

	const handleInputChange = (key: string, value: any) => {
		setNewTraining(state => ({...state, [key]: value}));
	}

	const handleCreateTraining = () => {
		let ids = Math.max.apply(trainings.map(train => train.id)) + 1;
		trainings.push({
			id: ids,
			name: newTraining.name,
			rows: newTraining.rows
		});
		setShowCreate(false);
	}

	useEffect(() => {
		const result = trainings.filter(train => train.name.toLowerCase().includes(searchInput.toLowerCase()));
		setSearchResult(result);
	}, [searchInput])

	return (
		<Container className='pt-5 container-fluid text-center d-flex flex-column'>
		<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
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
			<Col md='6' className={isActive ? 'pt-5 d-none' : 'pt-5'}>
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-1'>
						<p>{curr.name}</p>
					</Card.Title>
					<Card.Text>
						<div className='table-scroll mb-2'>
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
							{/* <tr>
							<td>20</td>
							<td>60</td>
							<td>80</td>
							</tr>
							<tr>
							<td>30</td>
							<td>65</td>
							<td>85</td>
							</tr>
							<tr>
							<td>20</td>
							<td>60</td>
							<td>80</td>
							</tr>
							<tr>
							<td>20</td>
							<td>60</td>
							<td>80</td>
							</tr>
							<tr>
							<td>30</td>
							<td>65</td>
							<td>85</td>
							</tr>
							<tr>
							<td>20</td>
							<td>60</td>
							<td>80</td>
							</tr> */}
						</tbody>
						</Table>
						</div>
						<Stack direction="horizontal" className='justify-content-between mt-4'>
							<Button variant="primary" className='shadow-lg'>Редактировать</Button>
							<Link to='/startWorkout'><Button variant="primary" className='shadow-lg'>Выбрать</Button></Link>
						</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			<Col md='6' className={isActive ? 'pt-5' : 'pt-5 d-none'}>
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-1'>
						<p>Выберите тренировку</p>
					</Card.Title>
					<Card.Text>
						<Placeholder as={Card.Title} animation="glow">
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12}className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
						</Placeholder>
						<Stack direction="horizontal" className='justify-content-between mt-4'>
							<Button variant="primary" className='shadow-lg'>Редактировать</Button>
							<Link to='/startWorkout'><Button variant="primary" className='shadow-lg'>Выбрать</Button></Link>
						</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
		</Row>
		{/* Модальное окно - Добавить тренировку */}
		<Modal 
			show={showCreateName} 
			onHide={() => setShowCreateName(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Добавить тренировку</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<InputGroup>
				<FormControl placeholder="Введите название"/>
			</InputGroup>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreateName(false)}>Отмена</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => {setShowCreate(true); setShowCreateName(false)}}>Далее</Button>
			</Modal.Footer>
		</Modal>
		<Modal 
			show={showCreate} 
			onHide={() => setShowCreate(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Добавить тренировку</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<InputGroup>
				<FormControl placeholder="Количество секунд"/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Нижняя граница пульса"/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Верхняя граница пульса"/>
			</InputGroup>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreate(false)}>Отмена</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => setShowCreate(false)}>Далее</Button>
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