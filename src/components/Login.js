import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Login = () => {
	return (
		<Container>
			<Card className='p-5 mt-5'>
				<Form>
					<h2>Log In</h2>
					<p>使用Google 或 Facebook登入</p>
					<Container>
						<Row className='text-center'>
							<Col md='12'>
								<Button variant='primary' size='lg' block>
									Facebook
								</Button>
							</Col>
							<Col md='12' className='mt-5'>
								<Button variant='danger' size='lg' block>
									Google
								</Button>
							</Col>
						</Row>
					</Container>
					<div className='or-seperator'>
						<b>Or</b>
					</div>
					<Form.Group className='mb-3'>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Button variant='success' size='lg' block>
						Sign In
					</Button>
				</Form>
			</Card>
		</Container>
	);
};

export default Login;
