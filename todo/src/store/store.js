import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

export const configureStore = () => {
	const store = createStore(rootReducer, composeWithDevTools());

	return store;
};

export default configureStore;
