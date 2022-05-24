import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from '../features/surveys/surveySlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    surveys: surveysReducer,
    form: reduxForm
  }
});
