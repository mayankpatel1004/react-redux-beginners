import authReducer from './authReducer';
import blogReducer from './blogReducer';
import contactReducer from './contactReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    contact: contactReducer
});

export default rootReducer;