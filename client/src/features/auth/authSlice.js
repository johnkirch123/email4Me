import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = '';

export const fetchUser = createAsyncThunk('fetch/user', async () => {
  const response = await axios.get('/api/current_user');
  return response.data;
});

export const handleToken = createAsyncThunk('handle/token', async (token) => {
  const response = await axios.post('/api/stripe', token);
  return response.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const user = {
        googleId: action.payload.googleId,
        credits: action.payload.credits
      };
      state.push(user);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(handleToken.fulfilled, (state, action) => {
        return action.payload;
      });
  }
});

export const selectUser = (state) => state.user;

export default authSlice.reducer;
