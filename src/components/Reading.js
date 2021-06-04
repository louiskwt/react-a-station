import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaChevronCircleDown } from 'react-icons/fa';
import useFirestore from '../hooks/useFirestore';

const Reading = () => {
	const { docs } = useFirestore('reading');
	console.log(docs);
	return (
		<Container>
			<Row>
				<Col>
					<h1>DSE Reading</h1>
					<p>DSE </p>
					<Accordion defaultActiveKey='0'>
						<Card>
							<Card.Header>
								<Accordion.Toggle
									as={Button}
									variant='light'
									eventKey='0'
								>
									<FaChevronCircleDown size={28} />
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey='0'>
								<ListGroup variant='flush'>
									<ListGroup.Item>Ex1 : </ListGroup.Item>
								</ListGroup>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default Reading;
