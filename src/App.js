import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Reading from './pages/Reading';
import Writing from './pages/Writing';
import ReadingEx from './pages/ReadingEx';
import WritingEx from './pages/WritingEx';

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
