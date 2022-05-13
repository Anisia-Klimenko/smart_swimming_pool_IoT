import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal, Placeholder } from "react-bootstrap";
import { sportsman } from '../emulation'

type Sport = {
	 id: number; name: string; age: number; size: number; weight: number; distance: number; 
		tquantity: number; time: number; avepulse: number; train_1: { date: string; pulsemax: number; 
		pulsemin: number; distance: number; }; train_2: { date: string; pulsemax: number; pulsemin: number; 
		distance: number; }; 
	}

const blankSportsman : Sport = {
		id: 0,
		name: ' ', 
		age: 0, 
		size: 0, 
		weight: 0, 
		distance: 0,
		tquantity: 0,
		time: 0,
		avepulse: 0,
		train_1: {
			date: "",
			pulsemax: 0,
			pulsemin: 0,
			distance: 0
		},
		train_2: {
			date: "",
			pulsemax: 0,
			pulsemin: 0,
			distance: 0
    }
}

let current : Sport;

function SportsmanWin() {
	const [showHistory, setShowHistory] = useState(false);
	const [showAchiv, setShowAchiv] = useState(false);
	const [showCreate, setShowCreate] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const [searchResult, setSearchResult] = useState(sportsman);
	const [isActive, setIsActive] = useState(true);
	const [newSportsman, setNewSportsman] = useState(blankSportsman);
	const [curr, setCurr] = useState({
		id: 0,
		name: ' ', 
		age: 0, 
		size: 0, 
		weight: 0, 
		distance: 0,
		tquantity: 0,
		time: 0,
		avepulse: 0,
		train_1: {
			date: "",
			pulsemax: 0,
			pulsemin: 0,
			distance: 0
		},
		train_2: {
			date: "",
			pulsemax: 0,
			pulsemin: 0,
			distance: 0
    }});

	const handleListItem = (man: Sport) => {
		setIsActive(false);
		setCurr({id: man.id, name: man.name, age: man.age, size: man.size, weight: man.weight, distance: man.distance, 
			tquantity: man.tquantity, time: man.time, avepulse: man.avepulse, train_1: man.train_1, train_2: man.train_2});
		current = curr;
	}

	const handleChangeSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setSearchInput(event.target.value);
	}

	const handleInputChange = (key: string, value: any) => {
		setNewSportsman(state => ({...state, [key]: value}));
	}

	const handleCreateSportsman = () => {
		let ids = Math.max.apply(sportsman.map(man => man.id)) + 1;
		sportsman.push({id: ids,
			name: newSportsman.name, 
			age: newSportsman.age, 
			size: newSportsman.size, 
			weight: newSportsman.weight, 
			distance: 0,
			tquantity: 0,
			time: 0,
			avepulse: 0,
			train_1: {
				date: "",
				pulsemax: 0,
				pulsemin: 0,
				distance: 0
			},
			train_2: {
				date: "",
				pulsemax: 0,
				pulsemin: 0,
				distance: 0
		}});
		setShowCreate(false);
	}

	useEffect(() => {
		const result = sportsman.filter(man => man.name.toLowerCase().includes(searchInput.toLowerCase()));
		setSearchResult(result);
	}, [searchInput])

	return(
	<Container className='pt-5 container-fluid text-center d-flex flex-column'>
		<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
			<Col md='6' className='pt-5'>
				<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-2'>
						Выбор спортсмена
					</Card.Title>
					<Card.Text>
					<InputGroup className="mt-4 mb-2">
						<FormControl
							placeholder="Поиск"
							value={searchInput}
							onChange={handleChangeSearch}/>
					</InputGroup>
					<ListGroup className='listgroup-scroll'>
						{searchResult.map(man => <ListGroup.Item action id={man.id.toString()} onClick={() => handleListItem(man)}>{man.name}</ListGroup.Item>)}
					</ListGroup>
					<Stack direction="horizontal" className='justify-content-between mt-4'>
						<Link to='/signIn'><Button variant="outline-primary" className='shadow-lg'>
							Назад
						</Button></Link>
						<Button variant="primary" className='shadow-lg' 
							onClick={() => setShowCreate(true)}>
							Создать
						</Button>
					</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			<Col md='6' className={isActive ? 'pt-5 d-none' : 'pt-5'} id="card-table">
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-2'>
						Карточка спортсмена
					</Card.Title>
					<Card.Text>
						<Stack direction="horizontal" className='justify-content-between mt-4 mb-3'>
							<Button variant="outline-primary" size="sm" className='shadow-lg' onClick={() => setShowHistory(true)}>
								История тренировок
							</Button>
							<Button variant="outline-primary" size="sm" className='shadow-lg' onClick={() => setShowAchiv(true)}>
								Достижения
							</Button>
						</Stack>
						<div className='listgroup-scroll'>
						<Table striped bordered hover className="justify-content-start">
						<tbody>
							<tr>
							<td className='col-md-3'>ФИО</td>
							<td colSpan={2} id='name'>{curr.name}</td>
							</tr>
							<tr>
							<td>Возраст</td>
							<td colSpan={2} id='age'>{curr.age}</td>
							</tr>
							<tr>
							<td>Рост</td>
							<td colSpan={2} id='size'>{curr.size}</td>
							</tr>
							<tr>
							<td>Вес</td>
							<td colSpan={2} id='weight'>{curr.weight}</td>
							</tr>
						</tbody>
						</Table>
						</div>
						<Col className='mt-4'><Link to='/training'><Button variant="primary" className='shadow-lg' onClick={() => current = curr}>
							Выбрать
						</Button></Link></Col>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			<Col md='6' className={isActive ? 'pt-5' : 'pt-5 d-none'} id="card-placeholder">
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-2'>
						Выберите спортсмена
					</Card.Title>
					<Card.Text>
						<Stack direction="horizontal" className='justify-content-between mt-4 mb-4'>
							<Placeholder.Button variant="outline-primary" xs={5} className='shadow-lg'></Placeholder.Button>
							<Placeholder.Button variant="outline-primary" xs={4} className='shadow-lg'></Placeholder.Button>
						</Stack>
						<Placeholder as={Card.Title} animation="glow">
							<Placeholder xs={12} className='mb-4'/>{' '}<Placeholder xs={12}className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
							<Placeholder xs={12} className='mb-4'/>{' '}
						</Placeholder>
						<Col className='mt-4'>
							<Placeholder.Button variant="primary" xs={3} className='shadow-lg'></Placeholder.Button>
						</Col>
					</Card.Text>
				</Card.Body></Card>
			</Col>
		</Row>
		{/* Модальное окно - история тренировок */}
		<Modal 
			show={showHistory} 
			onHide={() => setShowHistory(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered
			size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>История тренировок</h4>
				<h6>{curr.name}</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='listgroup-scroll'>
			<Table striped bordered hover>
			<thead>
				<tr>
				<th>Дата</th>
				<th>Пульс (макс)</th>
				<th>Пульс (мин)</th>
				<th>Дистанция, м</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>26/10/2022</td>
				<td>127</td>
				<td>75</td>
				<td>50</td>
				</tr>
				<tr>
				<td>{curr.train_1.date}</td>
				<td>{curr.train_1.pulsemin}</td>
				<td>{curr.train_1.pulsemax}</td>
				<td>{curr.train_1.distance}</td>
				</tr>
				<tr>
				<td>{curr.train_2.date}</td>
				<td>{curr.train_2.pulsemin}</td>
				<td>{curr.train_2.pulsemax}</td>
				<td>{curr.train_2.distance}</td>
				</tr>
			</tbody>
			</Table>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowHistory(false)}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
		{/* Модальное окно - достижения */}
		<Modal 
			show={showAchiv} 
			onHide={() => setShowAchiv(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Достижения</h4>
				<h6>{curr.name}</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Table striped bordered hover className="justify-content-start">
			<tbody>
				<tr>
				<td colSpan={2}>Дистанция, км</td>
				<td>{curr.distance}</td>
				</tr>
				<tr>
				<td colSpan={2}>Тренировки</td>
				<td>{curr.tquantity}</td>
				</tr>
				<tr>
				<td colSpan={2}>Врема, мин</td>
				<td>{curr.time}</td>
				</tr>
				<tr>
				<td colSpan={2}>Средний пульс</td>
				<td>{curr.avepulse}</td>
				</tr>
			</tbody>
			</Table>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowAchiv(false)}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
		{/* Модальное окно - добавить спортсмена */}
		<Modal 
			show={showCreate} 
			onHide={() => setShowCreate(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Добавить спортсмена</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<InputGroup>
				<FormControl placeholder="Введите ФИО" value={newSportsman.name} onChange={(e) => handleInputChange('name', e.target.value)}/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите возраст" value={newSportsman.age} onChange={(e) => handleInputChange('age', e.target.value)}/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите рост (см)" value={newSportsman.size} onChange={(e) => handleInputChange('size', e.target.value)}/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите вес (кг)" value={newSportsman.weight} onChange={(e) => handleInputChange('weight', e.target.value)}/>
			</InputGroup>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreate(false)}>Закрыть</Button>
					<Button variant="primary" className='shadow-lg' onClick={handleCreateSportsman}>Добавить</Button>
			</Modal.Footer>
		</Modal>
	</Container>);
}
class Sportsman extends React.Component {
	render() {
		return (<SportsmanWin />
		)
	}
}

export default Sportsman;
export {current};