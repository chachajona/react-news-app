import { combineReducers } from 'redux';
import loginReducer from './loginReducer'; 
import themeSlice from '../store/themeSlice'; 
import alertSlice from '../store/alertSlice';
import newsSlice from '../store/newsSlice';
import { connectRouter } from 'connected-react-router';
import { history } from '../utils/history';

const staticReducers = {
  login: loginReducer, 
  theme: themeSlice, 
  alert: alertSlice,
  news: newsSlice,
  router: connectRouter(history),
}

function rootReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export default rootReducer;