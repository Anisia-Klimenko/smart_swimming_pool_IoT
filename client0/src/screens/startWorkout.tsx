import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal} from "react-bootstrap";

function StartWorkoutWin() {
	const [showSportsman, setShowSportsman] = useState(false);
	const [showTraining, setShowTraining] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [showAchiv, setShowAchiv] = useState(false);

	return (
		<Container>
			<Row>
				<Stack direction="horizontal" className='justify-content-between mt-4 mb-3'>
						<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowSportsman(true)}>
							Достоевский Федор Михайлович
						</Button>
						<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowTraining(true)}>
							Кардио рывок
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
					<h1>0</h1>
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
					<Button className='shadow-lg' variant='secondary' disabled>-</Button>
					<h1>0</h1>
					<Button className='shadow-lg' variant='secondary' disabled>+</Button>
				</Stack>
				</Col> 
				<Col  md='6'>
				<Stack direction="horizontal" className='justify-content-around mt-4 mb-3'>
					<Button size='lg' variant="success" className='shadow-lg'>Старт</Button>
					<Button size='lg' variant="danger" className='d-none shadow-lg'>Стоп</Button>
				</Stack>
				</Col> 
			</Row>
			<Modal 
			show={showSportsman} 
			onHide={() => setShowSportsman(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			// size='lg'
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
				<h6>Достоевский Федор Михайлович</h6>
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
			<Table striped bordered hover className="justify-content-start table-size">
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
		<Modal 
			show={showTraining} 
			onHide={() => setShowTraining(false)} 
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
				<h4>Информация о тренировке</h4>
				<h6>Кардио рывок</h6>
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