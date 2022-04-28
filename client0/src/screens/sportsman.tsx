import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal} from "react-bootstrap";

function SportsmanWin() {
	const [showHistory, setShowHistory] = useState(false);
	const [showAchiv, setShowAchiv] = useState(false);
	const [showCreate, setShowCreate] = useState(false);
	
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
							placeholder="Поиск"/>
					</InputGroup>
					<ListGroup className='listgroup-scroll'>
					<ListGroup.Item action>Достоевский Федор Михайлович</ListGroup.Item>
					<ListGroup.Item action>Пушкин Александр Сергеевич</ListGroup.Item>
					<ListGroup.Item action>Набоков Владимир Владимирович</ListGroup.Item>
					<ListGroup.Item action>Пелевин Виктор Олегович</ListGroup.Item>
					<ListGroup.Item action>Гоголь Николай Васильевич</ListGroup.Item>
					<ListGroup.Item action>Булгаков Михаил Афанасьевич</ListGroup.Item>
					<ListGroup.Item action>Чехов Антон Павлович</ListGroup.Item>
					</ListGroup>
					<Stack direction="horizontal" className='justify-content-between mt-4'>
						<Link to='/signIn'><Button variant="outline-primary" className='shadow-lg'>
							Назад
						</Button></Link>
						<Button variant="primary" className='shadow-lg' onClick={() => setShowCreate(true)}>
							Создать
						</Button>
					</Stack>
					</Card.Text>
				</Card.Body></Card>
			</Col>
			<Col md='6' className='pt-5'>
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
						<div className='table-scroll-sm'>
						<Table striped bordered hover className="justify-content-start">
						<tbody>
							<tr>
							<td>ФИО</td>
							<td colSpan={2}>Достоевский Федор Михайлович</td>
							</tr>
							<tr>
							<td>Возраст</td>
							<td colSpan={2}>27 лет</td>
							</tr>
							<tr>
							<td>Рост</td>
							<td colSpan={2}>178 см</td>
							</tr>
							<tr>
							<td>Вес</td>
							<td colSpan={2}>72 кг</td>
							</tr>
						</tbody>
						</Table>
						</div>
						<Col className='mt-4'><Link to='/training'><Button variant="primary" className='shadow-lg'>
							Выбрать
						</Button></Link></Col>
					</Card.Text>
				</Card.Body></Card>
			</Col>
		</Row>
		{/* Модальное окно - история тренировок */}
		<Modal 
			show={showHistory} 
			onHide={() => setShowHistory(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>История тренировок</h4>
				<h6>Достоевский Федор Михайлович</h6>
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
				<td>26.10</td>
				<td>127</td>
				<td>75</td>
				<td>50</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
				</tr>
				<tr>
				<td>22.10</td>
				<td>120</td>
				<td>74</td>
				<td>28</td>
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
				<h6>Достоевский Федор Михайлович</h6>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<Table striped bordered hover className="justify-content-start">
			<tbody>
				<tr>
				<td colSpan={2}>Дистанция, км</td>
				<td>0,25</td>
				</tr>
				<tr>
				<td colSpan={2}>Тренировки</td>
				<td>4</td>
				</tr>
				<tr>
				<td colSpan={2}>Врема, мин</td>
				<td>327</td>
				</tr>
				<tr>
				<td colSpan={2}>Средний пульс</td>
				<td>97</td>
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
				<FormControl placeholder="Введите ФИО"/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите возраст"/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите рост (см)"/>
			</InputGroup>
			<InputGroup className="mt-4">
				<FormControl placeholder="Введите вес (кг)"/>
			</InputGroup>
			</Modal.Body>
			<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreate(false)}>Закрыть</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => setShowCreate(false)}>Добавить</Button>
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