import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { UserFields } from '../../interface';
import { SignUpForm, SignUpInitials } from '../interface';
import Axios from '../../../../config/axios';

const initialState: SignUpInitials = {
  loading: false,
  value: null,
  error: null,
};

// function rejectWithValue(error: string) {
//   throw new Error(error);
// }
export const signUpUser = createAsyncThunk('user/signup', async (body: SignUpForm) => {
  // return axios
  //   .post(`${import.meta.env.VITE_BACKEND_URL}/signup`, rest)
  //   .then((response) => {
  //     return response.data.token;
  //   })
  //   .catch((error) => {
  //     return rejectWithValue(error.response.data.message || 'internal error');
  //   });
  return Axios.post('/users/signup', body).then((response) => {
    return response.data;
  });
});

const SignUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addResponse: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.error = null;
      state.value = null;
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.value = action.payload;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Unknown Error';
    });
  },
});

export const { addResponse } = SignUpSlice.actions;
export default SignUpSlice.reducer;
