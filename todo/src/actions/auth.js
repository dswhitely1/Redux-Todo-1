import axios from 'axios';
import jwt_decode from 'jwt-decode';
import C from './types';
import setAuthToken from '../utils/setAuthToken';

export const doLogin = values => async dispatch => {
	console.log(`doLogin called with: ${values}`);
	dispatch({ type: C.LOGIN_START });
	try {
		const response = await axios.post('http://localhost:5000/api/users/login', values);
		const { token } = response.data;
		localStorage.setItem('jwtToken', token);
		setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch({ type: C.LOGIN_SUCCESS, payload: decoded });
	} catch (error) {
		dispatch({ type: C.LOGIN_FAILURE, payload: error.response.data });
	}
};

export const doRegister = values => async dispatch => {
	dispatch({ type: C.REGISTER_START });
	try {
		const response = await axios.post('http://localhost:5000/api/users/register', values);
		dispatch({ type: C.REGISTER_SUCCESS, payload: response.data });
	} catch (error) {
		dispatch({ type: C.REGISTER_FAILURE, payload: error.response.data });
	}
};

export const doLogout = () => dispatch => {
	dispatch({ type: C.LOGOUT_START });
	try {
		localStorage.removeItem('jwtToken');
		setAuthToken(false);
		dispatch({ type: C.LOGOUT_SUCCESS });
	} catch (error) {
		dispatch({ type: C.LOGOUT_FAILURE });
	}
};

export const doAcknowledge = () => {
	return {
		type : C.ACCOUNT_SUCCESS_MESSAGE,
	};
};
