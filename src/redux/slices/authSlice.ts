import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../rootReducer';
import { AuthState } from '../types/authType';

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: '',
  otp: undefined,
  startDate: undefined,
  endDate: undefined,
  bookingLocation: undefined,
  hours: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state: AuthState, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setOtp: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.otp = payload;
    },
    setUserData: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.userData = payload;
    },
    setRenterUserData: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.userData = payload;
    },
    setCmsPageData: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.cmsPages = payload;
    },
    setStartDate: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.startDate = payload;
    },
    setEndDate: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.endDate = payload;
    },
    setBookingLocation: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.bookingLocation = payload;
    },
    setHoursData: (state: AuthState, { payload }: PayloadAction<any>) => {
      state.hours = payload;
      console.log('payload--',payload);
      
    },
  },
});

export const {
  setLoading,
  setOtp,
  setUserData,
  setRenterUserData,
  setCmsPageData,
  setStartDate,
  setEndDate,
  setBookingLocation,
  setHoursData
} = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
