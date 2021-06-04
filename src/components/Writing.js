import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaChevronCircleDown } from 'react-icons/fa';

const Writing = () => {
	return (
		<Container>
			<h1>DSE Writing Exercises</h1>
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
		</Container>
	);
};

export default Writing;
