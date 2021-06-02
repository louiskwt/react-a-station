import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
	return (
		<Container>
			<Form>
				<h2>Log In</h2>
				<p>使用Google 或 Facebook登入</p>
				<Container>
					<Row className='text-center'>
						<Col md='6'>
							<Button variant='primary'>Facebook</Button>
						</Col>
						<Col md='6'>
							<Button variant='danger'>Google</Button>
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
				<Button variant='success'>Sign In</Button>
			</Form>
		</Container>
	);
};

export default Login;
