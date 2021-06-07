import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useReading } from '../hooks/useFirestore';

const ReadingEx = () => {
	const { id } = useParams();
	console.log(id);
	const { questions } = useReading(id);

	return (
		<div className='container'>
			<h1>Reading Ex</h1>
			<Row>
				<Col md={8}>
					<div className='container bg-light'>
						<h4>{questions.title}</h4>
					</div>
				</Col>
				<Col md={4}>Q&A</Col>
			</Row>
			<Row>
				<div className='fixed-bottom'>Panel</div>
			</Row>
		</div>
	);
};

export default ReadingEx;
