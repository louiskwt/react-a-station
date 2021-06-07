import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import Landing from './components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Reading from './components/Reading';
import Writing from './components/Writing';
import ReadingEx from './components/ReadingEx';
import WritingEx from './components/WritingEx';

function App() {
	return (
		<div>
			<Router>
				<TopBar />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route path='/login' component={Login} />
					<Route exact path='/reading' component={Reading} />
					<Route exact path='/writing' component={Writing} />
					<Route path='/reading/:id' component={ReadingEx} />
					<Route path='/writing/:id' component={WritingEx} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
