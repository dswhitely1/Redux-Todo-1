import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const application = (
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
);
const appRoot = document.getElementById('root');

render(application, appRoot);
