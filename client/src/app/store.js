import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// import authReducer from '../reducers/authReducer';
import surveysReducer from '../features/surveys/surveySlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    surveys: surveysReducer
  }
});
