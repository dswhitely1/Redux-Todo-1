import C from '../actions/types';
import isEmpty from '../validation/isEmpty';
const initialState = {
	isAuthenticated   : false,
	user              : {},
	errors            : {},
	isLoading         : false,
	isRegisterSuccess : false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case C.LOGIN_START:
			return {
				...state,
				isLoading : true,
			};
		case C.LOGIN_SUCCESS: {
			return {
				...state,
				isAuthenticated : !isEmpty(payload),
				user            : payload,
				errors          : {},
				isLoading       : false,
			};
		}
		case C.REGISTER_START:
			return {
				...state,
				isLoading : true,
			};
		case C.REGISTER_SUCCESS:
			return {
				...state,
				isRegisterSuccess : true,
			};
		case C.REGISTER_FAILURE:
			return {
				...state,
				errors    : payload,
				isLoading : false,
			};
		case C.LOGIN_FAILURE:
			return {
				...state,
				errors    : payload,
				isLoading : false,
			};
		case C.LOGOUT_START: {
			return {
				...state,
				isLoading : true,
			};
		}
		case C.LOGOUT_SUCCESS:
			return {
				...state,
				user            : {},
				isLoading       : false,
				isAuthenticated : false,
			};
		case C.LOGOUT_FAILURE:
			return {
				...state,
				isLoading : false,
			};
		case C.ACCOUNT_SUCCESS_MESSAGE:
			return {
				...state,
				isRegisterSuccess : false,
				isLoading         : false,
				errors            : {},
			};
		default:
			return state;
	}
};
