import { Dispatch } from '@reduxjs/toolkit';
import { appOperation } from '../../../services/apiServices';
import { endPoint } from '../../../services/apiEndPoints';
import {
  setAddLicenseDetails,
  setBookingData,
  setCreateBookingData,
  setCustomerNotificationData,
  setFilterData,
  setLoading,
  setMyBookingData,
  setOfferData,
  setRatingsData,
  setSearchHistory,
  setUploadLicense,
  setVehicleData,
  setVehicleDetailsData,
  setWishlistData,
  setSupportReason,
  setReportReasonData,
  setDeleteNotificationCustomer,
} from '../slices/customerSlice';
import { routes } from '../../../routes/routes';
import NavigationService from '../../../routes/NavigationService';
import { showError, showSuccess } from '../../../utils/logger';
import { getUserDetails } from './authAction';

export const getAllvehicle =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.getAllvehicle,
        data,
      );
      if (response?.status === 200) {
        dispatch(setVehicleData(response?.data));
      } else {
        dispatch(setLoading(false));
      }
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const vehicleDetailsApi =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.vehicleDetails,
        data,
      );
      if (response?.status === 200) {
        dispatch(setVehicleDetailsData(response?.data));
        NavigationService.navigate(routes.CARDETAIL);
      } else {
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const vehicleReportApi =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.vehicleReport,
        data,
      );
      if (response?.status === 200) {
        showSuccess('', response?.message);
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };
export const vehicleReportReasonApi = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.vehicleReportReason);
    if (response?.status === 200) {
      dispatch(setReportReasonData(response?.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const carLikeApi =
  (data: FormData, key: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(endPoint.carLike, data);
      if (response?.status === 200) {
        showSuccess('', response?.message);
        if (key === 2) {
          dispatch(getWishlist());
        }
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const getReviewAPi =
  (data: FormData, isFrom: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(endPoint.getReview, data);
      if (response?.status === 200) {
        dispatch(setRatingsData(response?.data));
        if (isFrom === 'renter') {
          NavigationService.navigate(routes.CUSTOMER_STACK, {
            screen: routes.RATINGSREVIEWS,
          });
        } else {
          NavigationService.navigate(routes.RATINGSREVIEWS);
        }
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const createBookingApi =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.createBooking,
        data,
      );
      if (response?.status === 200) {
        dispatch(setCreateBookingData(response?.data));
        NavigationService.navigate(routes.CHECKOUT);
      } else if (response?.status === 203) {
        NavigationService.navigate(routes?.DRIVERLICENCE, {
          isFrom: 'carDetails',
          params: data,
        });
        console.log('params--------my-------', data);
      } else {
        showError(response?.message);
        console.log('response?.message------', response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const getCouponsAPI = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.getCoupons, null);
    console.log('getCouponsAPI response ------>>>', response);
    if (response?.status === 200) {
      dispatch(setOfferData(response?.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const checkoutApi =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(endPoint.checkout, data);
      console.log('checkout response ------>>>', response);
      if (response?.status === 200) {
        showSuccess('', response?.message);
        NavigationService.navigate(routes.CONFIRMATION);
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const myBookingApi = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.myBooking, null);
    if (response?.status === 200) {
      dispatch(setMyBookingData(response?.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const applyCouponApi =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(endPoint.applyCoupon, data);
      console.log('applyCouponApi response ------>>>', response);
      if (response?.status === 200) {
        dispatch(setCreateBookingData(response?.data?.details));
        showSuccess('', response?.message);
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const removeCouponApi =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.removeCoupon,
        data,
      );
      console.log('removeCouponApi response ------>>>', response);
      if (response?.status === 200) {
        dispatch(setCreateBookingData(response?.data?.details));
        showSuccess('', response?.message);
      } else {
        showError(response?.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const filterDataApi = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.filterData, null);
    // console.log("Filter Data->",response?.data)
    dispatch(setFilterData(response?.data));
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const getWishlist = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.wishlistData, null);
    dispatch(setWishlistData(response?.data));
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const GetCustomerBookingDetails =
  (data: any, key: any, renterData: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.bookingDetails,
        data,
      );
      if (response?.status === 200) {
        dispatch(setBookingData(response?.data));
        dispatch(setLoading(false));
        if (key === 2) {
          NavigationService.navigate(routes.TRIPSDETAILS, {
            onOpenTab: 'rentalHistory',
            renterData: renterData,
          });
        } else if (key === 1) {
          NavigationService.navigate(routes.TRIPSDETAILS, {
            renterData: renterData,
          });
        } else {
          NavigationService.navigate(routes.TRIPSDETAILS, {
            onOpenTab: 'messages',
            renterData: renterData,
          });
        }
      } else {
        dispatch(setLoading(false));
        showError(response?.message);
      }
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };
export const RateVehicleApi =
  (data: any, value1: any, value2: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(endPoint.postRating, data);
      dispatch(setLoading(false));
      value1('');
      value2('');
      showSuccess(response.message, '');
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const CancelBookingApi =
  (data: any) => async (dispatch: Dispatch<any>) => {
    // dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.cancelBooking,
        data,
      );
      dispatch(myBookingApi());
      // dispatch(setLoading(false));
      showSuccess(response.message, '');
    } catch (e) {
      console.log('exception occured...', e);
      // dispatch(setLoading(false));
    }
  };

export const getSearchHistory = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.getSearchHistory);
    if (response.status === 200) {
      dispatch(setSearchHistory(response?.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      // console.log(response, 'errrooorrrrrr');
      showError(response.message);
    }
  } catch (e) {
    // console.log(e, ' ERROR');
    dispatch(setLoading(false));
    showError(e);
  }
};

export const uploadLicense = (data: any) => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint.uploadLicense, data);
    console.log('response------uploadLicense-', response);

    if (response.status === 200) {
      showSuccess(response.message, '');
      dispatch(setUploadLicense(response?.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      console.log(JSON.stringify(response), 'errrooorrrrrr');
      console.log('response?.data?.warning', response?.data?.warning);
      showError(response.message);
    }
  } catch (e) {
    console.log(e, ' ERROR');
    dispatch(setLoading(false));
    showError(e);
  }
};

export const addLicenseDetails =
  (data: any, bookingParams: any, fromBooking: boolean) =>
    async (dispatch: Dispatch<any>) => {
      dispatch(setLoading(true));
      try {
        const response: any = await appOperation.post(
          endPoint.addLicenseDetails,
          data,
        );
        console.log('response------addLicense-', response);

        if (response.status === 200) {
          console.log('response------addBankDetails-', response);
          showSuccess(response.message, '');
          if (fromBooking) {
            dispatch(createBookingApi(bookingParams));
          } else {
            dispatch(getUserDetails('DriverLicence'));
          }
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          console.log(response, 'errrooorrrrrr');
          showError(response.message);
        }
      } catch (e) {
        console.log(e, ' ERROR');
        dispatch(setLoading(false));
        showError(e);
      }
    };

export const requestToSupport =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.requestForsupport,
        data,
      );
      if (response.status === 200) {
        console.log('response------addBankDetails-', response);
        showSuccess(response.message, '');
        dispatch(setLoading(false));
        NavigationService.goBack();
      } else {
        dispatch(setLoading(false));
        console.log(response, 'errrooorrrrrr');
        showError(response.message);
      }
    } catch (e) {
      console.log(e, ' ERROR');
      dispatch(setLoading(false));
      showError(e);
    }
  };

export const getLicenseDetails = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.getLicenseDetails);
    if (response.status === 200) {
      console.log('response------getLicenseDetails-', response);
      showSuccess(response.message, '');
      dispatch(setUploadLicense(response?.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      showError(response.message);
    }
  } catch (e) {
    dispatch(setLoading(false));
    showError(e);
  }
};

export const getReason = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.getReason);
    if (response.status === 200) {
      dispatch(setSupportReason(response.data));
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(false));
      showError(response.message);
    }
  } catch (e) {
    dispatch(setLoading(false));
    showError(e);
  }
};

export const GetCustomerNotifications =
  () => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.get(
        endPoint.GetCustomerNotifications,
      );
      if (response.status === 200) {
        dispatch(setCustomerNotificationData(response?.data));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log(response, 'errrooorrrrrr');
      }
    } catch (e) {
      console.log(e, ' ERROR');
      dispatch(setLoading(false));
    }
  };


export const customerDeleteNotification =
  (data:any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.customerDeleteNotification,
        data,
      );
      if (response?.status === 200) {
        showSuccess(response?.message)
        dispatch(setLoading(false));
        dispatch(GetCustomerNotifications())
      } else {
      }
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

  export const renterNotificationDelete =
  (data:any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.renterNotificationDelete,
        data,
      );
      if (response?.status === 200) {
        showSuccess(response?.message)
        dispatch(setLoading(false));
        dispatch(GetCustomerNotifications())
      } else {
      }
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

