import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const TopBar = () => {
	return (
		<>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Link to='/'>
					<Navbar.Brand>A-station</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/reading'>
							<span className='nav-link' role='button'>
								閱讀
							</span>
						</Link>
						<Link to='/writing'>
							<span className='nav-link' role='button'>
								寫作
							</span>
						</Link>
					</Nav>
					<div className='inline'>
						<Link to='/login'>
							<Button variant='outline-success'>登入</Button>
						</Link>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default TopBar;
