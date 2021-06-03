import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import Landing from './components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Reading from './components/Reading';

function App() {
	return (
		<div>
			<Router>
				<TopBar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/login' component={Login} />
					<Route path='/reading' component={Reading} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
