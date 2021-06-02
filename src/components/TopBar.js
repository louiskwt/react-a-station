import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const TopBar = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#Home'>A-station</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link>寫作</Nav.Link>
						<Nav.Link>閱讀</Nav.Link>
					</Nav>
					<div className='inline'>
						<Button variant='primary' className='mr-3'>
							註冊
						</Button>
						<Button variant='success'>登入</Button>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default TopBar;
