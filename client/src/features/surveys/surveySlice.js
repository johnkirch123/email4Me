import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  surveys: [],
  status: 'idle',
  error: null
};

export const fetchSurveys = createAsyncThunk('fetch/surveys', async () => {
  const response = await axios.get('/api/surveys');
  console.log(response);
  return response.data;
});

const surveySlice = createSlice({
  name: 'surveys',
  initialState,
  reducers: {
    fetchSurveys: {
      reducer: (state, action) => {
        console.log(`state: ${state}, action: ${action}`);
        state.surveys.push(action.payload);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSurveys.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSurveys.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(`extraReducers in surveySlice: ${action.payload}`);
        return action.payload;
      });
  }
});

export const getAllSurveys = (state) => state.surveys;
export const getSurveyStatus = (state) => state.status;
export const getSurveyError = (state) => state.error;

export default surveySlice.reducer;
