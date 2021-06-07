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
							一個為中學生而設的線上DSE英文練習網站。目前平台仍在起步階段，所有練習會免費開放，而且會持續加入更多練習，如果你想支持這個平台的發展同埋保持免費開放的狀態，可以考慮成為我的Pateron
							(每月只需$5.00 USD)。
						</p>
					</Col>
					<Col md='4'>
						<h2>針對性練習</h2>
						<p>
							現時本站提供DSE Reading 同
							Writing嘅練習。所有練習都是集中針對某一項題型，讓你可以專注去改善你的弱點同強化你專長的題型。更多新的練習仍然在開發，日後會加入更多練習，敬請期待
						</p>
					</Col>
					<Col md='4'>
						<h2>需要你的支持</h2>
						<p>
							由於目前本站只有我一個人在經營，更新進度以及開發速度都是相對緩慢，因此我希望可以招募義工同有興趣參與網站開發或內容創作的學生去加入我的團隊。你不需要有任何技能，你只需要有心去學。
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Landing;
