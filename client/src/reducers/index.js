import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer';

export default combineReducers({
  form: reduxForm,
  surveys: surveysReducer
});
