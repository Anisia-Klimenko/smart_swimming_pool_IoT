import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal} from "react-bootstrap";

function TrainingWin() {
	const [showCreateName, setShowCreateName] = useState(false);
	const [showCreate, setShowCreate] = useState(false);
	const [showChange, setShowChange] = useState(false);

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
							placeholder="Поиск"/>
					</InputGroup>
					<ListGroup className='listgroup-scroll'>
					<ListGroup.Item action>Восстановление</ListGroup.Item>
					<ListGroup.Item action>Кардио рывок</ListGroup.Item>
					<ListGroup.Item action>Восстановление v2.0</ListGroup.Item>
					<ListGroup.Item action>Моя тренировка1</ListGroup.Item>
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
			<Col md='6' className='pt-5'>
				<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
					<Card.Title className='pt-2 pb-1'>
						<p>Кардио рывок</p>
					</Card.Title>
					<Card.Text>
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
							</tr>
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