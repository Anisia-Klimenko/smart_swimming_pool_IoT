import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Button, Container, Row, Col, Card, InputGroup, FormControl, Stack, Table, ListGroup, Modal, Placeholder, Alert } from "react-bootstrap";
import { trainings } from '../emulation'

type Rows = {
	time: number; pulsemax: number; pulsemin: number;
}

type Train = {
	id: number; name: string; rows: Array<Rows>;
}

const blankTrain: Train = {
	id: 0,
	name: "",
	rows: [{
		time: 0,
		pulsemax: 0,
		pulsemin: 0
	}]
}

let currentTrain: Train;
let time: string | number | string[] | undefined, pulsemin: string | number | string[] | undefined, pulsemax: number;

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
		rows: [{
			time: 0,
			pulsemax: 0,
			pulsemin: 0
		}]
	})

	const handleListItem = (train: Train) => {
		setIsActive(false);
		setCurr({ id: train.id, name: train.name, rows: train.rows });
		currentTrain = curr;
	}

	const handleChangeSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setSearchInput(event.target.value);
	}

	const handleChangeNewName = (event: { target: { value: any; }; }) => {
		setNewTraining(state => ({ ...state, name: event.target.value }))
	}

	const handleInputChange = (event: { target: { value: any; }; }, variable: any) => {
		variable = event.target.value;
		// setNewTraining(state => ({...state, [key]: value}));
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

	const handleAddRow = () => {

	}

	useEffect(() => {
		const result = trainings.filter(train => train.name.toLowerCase().includes(searchInput.toLowerCase()));
		setSearchResult(result);
	}, [searchInput])

	return (
		<Container className='pt-5 container-fluid text-center d-flex flex-column'>
			<Row className="mt-5 justify-content-md-center align-items-center flex-fill">
				{/* ???????????????? ???? ?????????????? ???????????????????? */}
				<Col md='6' className='pt-5'>
					<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							?????????? ????????????????????
						</Card.Title>
						<Card.Text>
							<InputGroup className="mt-4 mb-2">
								<FormControl
									placeholder="??????????"
									value={searchInput}
									onChange={handleChangeSearch} />
							</InputGroup>
							<ListGroup className='listgroup-scroll'>
								{searchResult.map(train => <ListGroup.Item action id={train.id.toString()} onClick={() => handleListItem(train)}>{train.name}</ListGroup.Item>)}
							</ListGroup>
							<Stack direction="horizontal" className='justify-content-between mt-4'>
								<Link to='/sportsman'><Button variant="outline-primary" className='shadow-lg'>
									??????????
								</Button></Link>
								<Button variant="primary" className='shadow-lg' onClick={() => setShowCreateName(true)}>
									??????????????
								</Button>
							</Stack>
						</Card.Text>
					</Card.Body></Card>
				</Col>
				{/* ???????????????? ?? ?????????????????????? ?? ???????????????????? */}
				<Col md='6' className={isActive ? 'pt-5 d-none' : 'pt-5'}>
					<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-2'>
							<p>{curr.name === '' ? '???????????????? ????????????????????' : curr.name}</p>
						</Card.Title>
						<Card.Text>
							<div className='table-scroll mb-3'>
								<Table striped bordered hover className="justify-content-start" >
									<thead>
										<tr>
											<th>??????????, ??????</th>
											<th>?????????? (??????)</th>
											<th>?????????? (????????)</th>
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
								<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowChange(true)}>??????????????????????????</Button>
								<Link to='/startWorkout'><Button variant="primary" className='shadow-lg' onClick={() => currentTrain = curr}>??????????????</Button></Link>
							</Stack>
						</Card.Text>
					</Card.Body></Card>
				</Col>
				{/* ???????????? ???????????????? ???????????????? */}
				<Col md='6' className={isActive ? 'pt-5' : 'pt-5 d-none'}>
					<Card className='shadow' style={{ height: '26.8rem' }}><Card.Body className='m-3'>
						<Card.Title className='pt-2 pb-4'>
							<p>???????????????? ????????????????????</p>
						</Card.Title>
						<Card.Text>
							<Placeholder as={Card.Title} animation="glow">
								<Placeholder xs={12} className='mb-4' />{' '}
								<Placeholder xs={12} className='mb-4' />{' '}
								<Placeholder xs={12} className='mb-4' />{' '}
								<Placeholder xs={12} className='mb-4' />{' '}
								<Placeholder xs={12} className='mb-4' />{' '}
							</Placeholder>
							<Stack direction="horizontal" className='justify-content-between mt-4'>
								<Placeholder.Button variant="outline-primary" xs={4} className='shadow-lg'></Placeholder.Button>
								<Placeholder.Button variant="primary" xs={3} className='shadow-lg'></Placeholder.Button>
							</Stack>
						</Card.Text>
					</Card.Body></Card>
				</Col>
			</Row>
			{/* ?????????????????? ???????? - ?????????????? ???????????????????? */}
			<Modal
				show={showDelete}
				onHide={() => setShowDelete(false)}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>
						?????????????? ????????????????????
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					???? ??????????????, ?????? ???????????? ?????????????? ???????????????????? {curr.name}?
				</Modal.Body>
				<Modal.Footer className='justify-content-between'>
					<Button variant='outline-primary' className='shadow-lg' onClick={() => setShowDelete(false)}>????????????</Button>
					<Button variant="danger" className='shadow-lg' onClick={() => { handleDeleteTrain(); }}>??????????????</Button>
				</Modal.Footer>
			</Modal>
			{/* ?????????????????? ???????? - ???????????????? ???????????????????? */}
			<Modal
				show={showCreateName}
				onHide={() => { setShowCreateName(false); setShowMessage(false); }}
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title>
						<h4>???????????????? ????????????????????</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='m-3'>
					<InputGroup>
						<FormControl
							placeholder="?????????????? ????????????????"
							value={newTraining.name}
							onChange={handleChangeNewName}
							required />
					</InputGroup>
					<Alert
						key='danger'
						variant='success'
						show={showMessage}
						className='mt-2'>
						???????????????? ???? ?????????? ???????? ????????????
					</Alert>
				</Modal.Body>
				<Modal.Footer className='justify-content-between'>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowCreateName(false)}>????????????</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => { handleCreateTraining() }}>??????????</Button>
				</Modal.Footer>
			</Modal>
			{/* ?????????????????? ???????? - ?????????????????????????? ???????????????????? */}
			<Modal
				show={showChange}
				onHide={() => setShowChange(false)}
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title>
						<h4>{curr.name === '' ? '???????????????? ????????????????????' : curr.name}</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='m-3'>
					<div className='table-scroll mb-3'>
						<Table striped bordered hover className="justify-content-start" >
							<thead>
								<tr>
									<th>??????????, ??????</th>
									<th>?????????? (??????)</th>
									<th>?????????? (????????)</th>
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
							placeholder="??????????, ??????"
							value={time}
							type="number"
							onChange={(e) => handleInputChange(e, time)}
							required />
						<FormControl
							placeholder="?????????? (??????)"
							value={pulsemin}
							type="number"
							onChange={(e) => handleInputChange(e, pulsemin)}
							required />
						<FormControl
							placeholder="?????????? (????????)"
							value={pulsemax}
							type="number"
							onChange={(e) => handleInputChange(e, pulsemax)}
							required />
						<Button variant='success' onClick={handleAddRow}>+</Button>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer className='justify-content-between'>
					<Button variant="danger" className='shadow-lg mb-2' onClick={() => setShowDelete(true)}>?????????????? ????????????????????</Button>
					<Button variant="outline-primary" className='shadow-lg' onClick={() => setShowChange(false)}>????????????</Button>
					<Button variant="primary" className='shadow-lg' onClick={() => setShowChange(false)}>??????????????????</Button>
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
export { currentTrain };