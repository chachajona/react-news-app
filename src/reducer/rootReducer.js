import { combineReducers } from 'redux';
import loginReducer from './loginReducer'; 
import themeSlice from '../store/themeSlice'; 
import alertSlice from '../store/alertSlice'; 
import { connectRouter } from 'connected-react-router';
import { history } from '../utils/history';

const rootReducer = combineReducers({
  login: loginReducer, 
  theme: themeSlice, 
  alert: alertSlice,
  router: connectRouter(history), 
});

export default rootReducer;