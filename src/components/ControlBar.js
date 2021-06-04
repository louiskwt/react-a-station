import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ControlBar = () => {
	return (
		<>
			<Navbar bg='light' variant='light'>
				<div className='sidebar-sticky'></div>
				<Nav>
					<Nav.Item>00:00</Nav.Item>
					<Nav.Item>已完成</Nav.Item>
				</Nav>
			</Navbar>
		</>
	);
};

export default ControlBar;
