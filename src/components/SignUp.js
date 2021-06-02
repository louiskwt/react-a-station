import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SignUp = () => {
	return (
		<Container>
			<Card>
				<Form className='text-center'>
					<h2>Sign Up Form</h2>
					<Form.Group className='mb-3'>
						<Form.Label>Email</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
					<Button variant='primary'>Sign Up</Button>
				</Form>
			</Card>
		</Container>
	);
};

export default SignUp;
