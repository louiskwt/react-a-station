import React from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaChevronCircleDown } from 'react-icons/fa';
import { useFirestore } from '../hooks/useFirestore';
import { Link } from 'react-router-dom';

const Writing = () => {
	const { docs } = useFirestore('writing');
	console.log(docs);
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
							{docs.map((doc) => (
								<Link to={`/writing/${doc.title}`} key={doc.id}>
									<ListGroup.Item action>
										Ex : {doc.title}
									</ListGroup.Item>
								</Link>
							))}
						</ListGroup>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Container>
	);
};

export default Writing;
