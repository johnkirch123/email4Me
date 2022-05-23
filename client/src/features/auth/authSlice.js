import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await axios.get('/api/current_user');
  console.log(response.data);
  return response.data;
});

export const logoutUser = createAsyncThunk('/api/logout', () => {
  console.log('Logged Out');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: {
      reducer: (state, action) => {
        console.log(`state: ${state}, action: ${action}`);
      }
    }
  }
});

export default authSlice.reducer;
