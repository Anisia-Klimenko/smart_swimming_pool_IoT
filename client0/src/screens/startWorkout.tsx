import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, Stack, Table, Modal, Offcanvas} from "react-bootstrap";
import { currentSportsman } from './sportsman'
import { currentTrain } from './training'

function Timer(props: { time: number; }) {
	return (
		<h1>
		  {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
		  {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
		</h1>
	);
  }

function StartWorkoutWin() {
	const [showSportsman, setShowSportsman] = useState(false);
	const [showTraining, setShowTraining] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [showAchiv, setShowAchiv] = useState(false);
	const [showPoolInfo, setShowPoolInfo] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const [isStopped, setIsStopped] = useState(true);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval: number | NodeJS.Timer | null | undefined = null;
		if(!isStopped) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		}
		else {
			clearInterval(interval as unknown as NodeJS.Timer);
		}
		return () => {
			clearInterval(interval as unknown as NodeJS.Timer);
		}
	}, [isStopped]);

	const handleStartClick = () => {
		setIsActive(true);
		setIsStopped(false);
	}

	const handleStopClick = () => {
		setIsActive(false);
		setIsStopped(true);
		setTime(0);
	}

	return (
		<Container>
			<Row>
				<Stack direction="horizontal" className='justify-content-between mt-4 mb-3'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowSportsman(true)}>
						{currentSportsman.name}
					</Button>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowTraining(true)}>
						{currentTrain.name}
					</Button>
				</Stack>
			</Row>
			<Row className='mb-3'>
				<Col md='6' className='pt-5'>
					<Card className='shadow card-height'><Card.Body className='m-2'>
						<Card.Title className='pt-2 pb-2'>
							Пульс от времени
						</Card.Title>
						<Card.Text>
						
						</Card.Text>
					</Card.Body></Card>
				</Col>
				<Col md='6' className='pt-5'>
					<Card className='shadow card-height'><Card.Body className='m-2'>
						<Card.Title className='pt-2 pb-2'>
							Скорость
						</Card.Title>
						<Card.Text>
						
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
			<Row>
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<h4>Время</h4>
				</Stack>
				</Col> 
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<Timer time={time}></Timer>
				</Stack>
				</Col>
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<h4>Пульс</h4>
				</Stack>
				</Col> 
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<h1>0</h1>
				</Stack>
				</Col> 
			</Row>
			<Row>
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<h4>Скорость</h4>
				</Stack>
				</Col> 
				<Col md='3'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<Button 
						className='shadow-lg' 
						variant={isActive ? 'primary' : 'secondary'} 
						disabled={!isActive}>-</Button>
					<h1>0</h1>
					<Button 
						className='shadow-lg' 
						variant={isActive ? 'primary' : 'secondary'} 
						disabled={!isActive}>+</Button>
				</Stack>
				</Col> 
				<Col  md='6'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<Button size='lg' variant="success" className={isActive ? 'd-none' : 'shadow-lg'} onClick={handleStartClick}>Старт</Button>
					<Button size='lg' variant="danger" className={isActive ? 'shadow-lg' : 'd-none'} onClick={handleStopClick}>Стоп</Button>
				</Stack>
				</Col>
				<Button variant="outline-primary" className='shadow-lg mt-4' onClick={() => setShowPoolInfo(true)}>
					Бассейн
				</Button>
			</Row>
			<Offcanvas 
				show={showPoolInfo} 
				onHide={() => setShowPoolInfo(false)}
				key='top'
				placement='top'
				backdropClassName='table-scroll-sm'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Информация о бассейне</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
				<Row>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<h5>Температура воды</h5>
					<Button className='shadow-lg' variant='primary'>-</Button>
					<h1>25</h1>
					<Button className='shadow-lg' variant='primary'>+</Button>
					<h5>Температура воздуха</h5>
					<Button className='shadow-lg' variant='primary'>-</Button>
					<h1>24</h1>
					<Button className='shadow-lg' variant='primary'>+</Button>
				</Stack>
				</Row> 
				</Offcanvas.Body>
			</Offcanvas>
			<Modal 
			show={showSportsman} 
			onHide={() => setShowSportsman(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Карточка спортсмена</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='m-3'>
			<div className='listgroup-scroll'>
				<Table striped bordered hover className="justify-content-start">
				<tbody>
					<tr>
					<td>ФИО</td>
					<td colSpan={2}>{currentSportsman.name}</td>
					</tr>
					<tr>
					<td>Возраст</td>
					<td colSpan={2}>{currentSportsman.age} лет</td>
					</tr>
					<tr>
					<td>Рост</td>
					<td colSpan={2}>{currentSportsman.size} см</td>
					</tr>
					<tr>
					<td>Вес</td>
					<td colSpan={2}>{currentSportsman.weight} кг</td>
					</tr>
				</tbody>
				</Table>
			</div>
			</Modal.Body>
			<Modal.Footer className='justify-content-right'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowHistory(true)}>История тренировок</Button>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowAchiv(true)}>Достижения</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => setShowSportsman(false)}>Назад</Button>
			</Modal.Footer>
		</Modal>
		<Modal 
			show={showHistory} 
			onHide={() => setShowHistory(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>История тренировок</h4>
				<h6>{currentSportsman.name}</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='table-scroll-sm'>
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
				{currentSportsman.trains.map(train => <tr>
				<td>{train.date}</td>
				<td>{train.pulsemin}</td>
				<td>{train.pulsemax}</td>
				<td>{train.distance}</td>
				</tr>)}
			</tbody>
			</Table>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowHistory(false)}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
		<Modal 
			show={showAchiv} 
			onHide={() => setShowAchiv(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Достижения</h4>
				<h6>{currentSportsman.name}</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Table striped bordered hover className="justify-content-start table-size">
			<tbody>
				<tr>
				<td colSpan={2}>Дистанция, км</td>
				<td>{currentSportsman.distance}</td>
				</tr>
				<tr>
				<td colSpan={2}>Тренировки</td>
				<td>{currentSportsman.tquantity}</td>
				</tr>
				<tr>
				<td colSpan={2}>Врема, мин</td>
				<td>{currentSportsman.time}</td>
				</tr>
				<tr>
				<td colSpan={2}>Средний пульс</td>
				<td>{currentSportsman.avepulse}</td>
				</tr>
			</tbody>
			</Table>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowAchiv(false)}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
		<Modal 
			show={showTraining} 
			onHide={() => setShowTraining(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Информация о тренировке</h4>
				<h6>{currentTrain.name}</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<div className='table-scroll mb-2'>
				<Table striped bordered hover className="justify-content-start" >
				<thead>
					<tr>
					<th>Время, сек</th>
					<th>Пульс (макс)</th>
					<th>Пульс (мин)</th>
					</tr>
				</thead>
				<tbody>
					{currentTrain.rows.map(row => <tr>
					<td>{row.time}</td>
					<td>{row.pulsemin}</td>
					<td>{row.pulsemax}</td>
					</tr>)}
				</tbody>
				</Table>
			</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowTraining(false)}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
		</Container>
	)
}

class StartWorkout extends React.Component {
	render() {
		return (<StartWorkoutWin/>)
	}
}

export default StartWorkout;

function start(start: any): React.SetStateAction<Date> {
	throw new Error('Function not implemented.');
}
