import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal} from "react-bootstrap";

function Modalwin() {
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
		return(	<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				<Col md='6' className='pt-5'>
					<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							Выбор спортсмена
						</Card.Title>
						<Card.Text className=''>
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
							<Link to='/signIn'><Button variant="primary" className='shadow-lg'>
								Создать
							</Button></Link>
						</Stack>
						</Card.Text>
					</Card.Body></Card>
				</Col>
				<Col md='6' className='pt-5'>
					<Card className='shadow'  style={{ height: '26.8rem' }}><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							Карточка спортсмена
						</Card.Title>
						<Card.Text className=''>
							<Stack direction="horizontal" className='justify-content-between mt-4 mb-3'>
								<Button variant="outline-primary" className='shadow-lg' onClick={handleShow}>
									История тренировок
								</Button>
								<Button variant="outline-primary" className='shadow-lg'>
									Достижения
								</Button>
							</Stack>
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
							<Col className='mt-5'><Link to='/signIn'><Button variant="primary" className='shadow-lg'>
								Выбрать
							</Button></Link></Col>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
			<Modal 
				show={show} 
				onHide={handleClose} 
				size="lg"
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
					<Button variant="outline-primary" onClick={handleClose}>Закрыть</Button>
				</Modal.Footer>
			</Modal>
		</Container>);
}
class Sportsman extends React.Component {
	render() {
		return (<Modalwin />
		)
	}
}

export default Sportsman;