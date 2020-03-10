import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Layout/Navigation';
import LandingPage from './Layout/LandingPage';
import Footer from './Layout/Footer';
import Login from './Auth/Login';
import Register from './Auth/Register';

const App = () => {
	return (
		<div>
			<Navigation />
			<Route exact path='/' component={LandingPage} />
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />
			<Footer />
		</div>
	);
};

export default App;
