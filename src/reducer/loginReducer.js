import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../config/actionTypes';

const initialState = {
  user: null,
  role: null,
  error: null,
  isAuthenticated:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.username,
        role: action.payload.role,
        isAuthenticated:true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
