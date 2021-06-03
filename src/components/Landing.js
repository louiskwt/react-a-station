import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<>
			<Jumbotron fluid style={{ height: '50vh' }}>
				<Container>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<h1 className='text-center'>A-station</h1>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }} className='mt-3'>
							<h5 className='text-center'>
								一個提供線上DSE練習的學習平台
							</h5>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<div className='text-center mt-5'>
								<Link to='/reading'>
									<Button
										variant='primary'
										className='mr-4'
										size='lg'
									>
										練Reading
									</Button>
								</Link>
								<Link to='/writing'>
									<Button variant='info' size='lg'>
										練Writing
									</Button>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
			<Container>
				<Row>
					<Col md='4'>
						<h2>線上DSE練習</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex ut inventore facere sit placeat est eius
							sint dolore ducimus id soluta necessitatibus cum,
							nihil, ullam corporis ad libero doloremque tempore.
						</p>
					</Col>
					<Col md='4'>
						<h2>線上DSE練習</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex ut inventore facere sit placeat est eius
							sint dolore ducimus id soluta necessitatibus cum,
							nihil, ullam corporis ad libero doloremque tempore.
						</p>
					</Col>
					<Col md='4'>
						<h2>線上DSE練習</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex ut inventore facere sit placeat est eius
							sint dolore ducimus id soluta necessitatibus cum,
							nihil, ullam corporis ad libero doloremque tempore.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Landing;
