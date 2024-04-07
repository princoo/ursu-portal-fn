import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserFields } from '../../interface';
import { LoginInitials, ValuesType } from '../interface';
import Axios from '../../../../config/axios';
import { store } from '../../../../redux/store';
import { setToken } from '../../../../redux/slices/tokenSlice';

const initialState: LoginInitials = {
  loading: false,
  value: null,
  error: null,
};

export const logInUser = createAsyncThunk('user/login', async (body: ValuesType) => {
  return Axios.post('/users/login', body).then((response) => {
    store.dispatch(setToken(response.data.accessToken));
    return response.data;
  });
});

const LogInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addResponse: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state) => {
      state.error = null;
      state.value = null;
      state.loading = true;
    });
    builder.addCase(logInUser.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unknown Error';
    });
  },
});

export const { addResponse } = LogInSlice.actions;
export default LogInSlice.reducer;
