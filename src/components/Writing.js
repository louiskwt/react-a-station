import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
							variant='link'
							eventKey='0'
						>
							Expand
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>Hello! Writing EX</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
};

export default Writing;