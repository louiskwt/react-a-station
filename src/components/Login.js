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
				</Form>
			</Card>
		</Container>
	);
};

export default Login;
