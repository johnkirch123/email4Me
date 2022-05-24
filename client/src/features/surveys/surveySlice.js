import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  surveys: [],
  status: 'idle',
  error: null
};

export const fetchSurveys = createAsyncThunk('fetch/surveys', async () => {
  const response = await axios.get('/api/surveys');
  return response.data;
});

export const submitSurvey = (values, history) =>
  createAsyncThunk('submit/survey', async () => {
    const response = await axios.post('/api/surveys', values);
    history.push('/surveys');
    return response.data;
  });

const surveySlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSurveys.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.surveys = action.payload;
      });
  }
});

export const getAllSurveys = (state) => state.surveys.surveys;
export const getSurveyStatus = (state) => state.surveys.status;
export const getSurveyError = (state) => state.surveys.error;

export default surveySlice.reducer;
