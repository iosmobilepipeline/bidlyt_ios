import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../rootReducer';

export interface CustomerState {
  isLoading: boolean;
  error: string;
  vehicleData: any;
  vehicleDetailsData: any;
  ratingsData: any;
  createBookingData: any;
  currentLocationData: any;
  pickupDateData: any;
  dropoffDateData: any;
  offerData: any;
  myBookingData: any;
  offerCode: any;
  filterData: any;
  wishlistData: any;
  bookingDetailsData: any;
  userSearchHistory?: any;
  userUploadLicense?: any;
  userAddLicenseDetails?: any;
  userNotificationData?: any;
  supportReason?: any;
  vechicleReportData?: any;
}
export const initialState: CustomerState = {
  isLoading: false,
  error: '',
  vehicleData: undefined,
  vehicleDetailsData: undefined,
  ratingsData: undefined,
  createBookingData: undefined,
  currentLocationData: undefined,
  pickupDateData: undefined,
  dropoffDateData: undefined,
  offerData: undefined,
  myBookingData: undefined,
  offerCode: undefined,
  filterData: undefined,
  wishlistData: undefined,
  bookingDetailsData: undefined,
  userSearchHistory: undefined,
  userUploadLicense: undefined,
  userAddLicenseDetails: undefined,
  userNotificationData: undefined,
  vechicleReportData: undefined,

};

export const customerSlice = createSlice({
  name: 'renter',
  initialState,
  reducers: {
    setLoading: (state: CustomerState, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },

    setVehicleData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.vehicleData = payload;
    },

    setVehicleDetailsData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.vehicleDetailsData = payload;
    },

    setRatingsData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.ratingsData = payload;
    },

    setCreateBookingData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.createBookingData = payload;
    },

    setCurrentLocationData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.currentLocationData = payload;
    },

    setPickUpDateData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.pickupDateData = payload;
    },

    setDropOffDateData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.dropoffDateData = payload;
    },

    setOfferData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.offerData = payload;
    },

    setMyBookingData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.myBookingData = payload;
    },

    setOfferCode: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.offerCode = payload;
    },

    setFilterData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.filterData = payload;
    },
    setWishlistData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.wishlistData = payload;
    },
    setBookingData: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.bookingDetailsData = payload;
    },
    setSearchHistory: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.userSearchHistory = payload;
    },
    setUploadLicense: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.userUploadLicense = payload;
    },
    setAddLicenseDetails: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.userAddLicenseDetails = payload;
    },
    setCustomerNotificationData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.userNotificationData = payload;
    },
    setSupportReason: (state: CustomerState, { payload }: PayloadAction<any>) => {
      state.supportReason = payload;
    },
    setReportReasonData: (
      state: CustomerState,
      { payload }: PayloadAction<any>,
    ) => {
      state.vechicleReportData = payload;
    },
   
  },
});
export const {
  setLoading,
  setVehicleData,
  setVehicleDetailsData,
  setRatingsData,
  setCreateBookingData,
  setCurrentLocationData,
  setPickUpDateData,
  setDropOffDateData,
  setOfferData,
  setMyBookingData,
  setOfferCode,
  setFilterData,
  setWishlistData,
  setBookingData,
  setSearchHistory,
  setUploadLicense,
  setAddLicenseDetails,
  setCustomerNotificationData,
  setSupportReason,
  setReportReasonData,
} = customerSlice.actions;
export const renterSelector = (state: RootState) => state.renter;
export default customerSlice.reducer;
