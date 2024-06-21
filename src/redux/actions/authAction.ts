import { Dispatch } from '@reduxjs/toolkit';
import {
  setCmsPageData,
  setLoading,
  setOtp,
  setUserData,
} from '../slices/authSlice';
import { appOperation } from '../../../services/apiServices';
import { endPoint } from '../../../services/apiEndPoints';
import { showAlert, showError, showSuccess } from '../../../utils/logger';
import { storeJsonData, storeStringData } from '../../../utils/storateAsync';
import {
  Customer_Ph_Data,
  FCM_TOKEN_KEY,
  MOBILE_VERIFIED,
  USER_TOKEN,
} from '../../../services/constants';
import NavigationService from '../../../routes/NavigationService';
import { routes } from '../../../routes/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { filterDataApi, getSearchHistory } from './customerAction';

export const verificationPhoneNumber =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));

    try {
      const response: any = await appOperation.post(
        endPoint.verifiyNumber,
        data,
      );
      console.log('response---------', response);

      if (response?.status === 200) {
        showSuccess('ZellCarz', response.message);
        dispatch(setOtp(response?.otp));
      } else {
        console.log('response-status', response);
        showAlert(response.message);
        dispatch(setOtp(''));
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const verifyOTP = (data: any) => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint.verifyOTP, data);
    if (response?.status === 200) {
      storeStringData(
        MOBILE_VERIFIED,
        response?.data?.mobile_verified.toString() || '',
      );
      storeJsonData(Customer_Ph_Data, response?.data || '');
      appOperation.setMobileVerified(
        response?.data?.mobile_verified.toString() || '',
      );
      NavigationService.reset(routes.CUSTOMER_STACK);
    } else {
      showAlert(response.message);
      dispatch(setOtp(''));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const resendOTP = (data: any) => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint.resendOTP, data);
    if (response?.status === 200) {
      showSuccess('ZellCarz', response.message);
      dispatch(setOtp(response?.otp));
    } else {
      showAlert(response.message);
      dispatch(setOtp(''));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const loginUser = (data: any) => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint.login, data);
    console.log(response);

    if (response?.status === 200) {
      NavigationService.reset(routes.CUSTOMER_STACK);
      storeStringData(USER_TOKEN, response?.token || '');
      appOperation.setCustomerToken(response?.token || '');
      dispatch(setUserData(response?.data));
      dispatch(getSearchHistory());
    } else {
      showAlert(response.message);
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const registerUser = (data: any) => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.post(endPoint.register, data);
    if (response?.status === 200) {
      showSuccess('ZellCarz', response.message);
      // NavigationService.navigate(routes.LOGIN);
      NavigationService.navigate(routes.PASSWORD_SUCCESS, {
        // key: 'registerRenter',
      });
    } else {
      showAlert(response.message);
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const getUserDetails =
  (root: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.get(
        endPoint.getUserDetails,
        null,
      );
      console.log(
        '🚀 ~ file: authAction.ts:141 ~ getUserDetails ~ response:',
        response,
      );
      if (response?.status === 200) {
        dispatch(setUserData(response?.data));
        dispatch(filterDataApi());
        if (root === 'DriverLicence') {
          NavigationService.goBack();
        } else if (root == '1') {
          console.log('gg');
        } else {
          NavigationService.reset(routes.CUSTOMER_STACK);
        }
      }

      if (response?.message === 'Unauthenticated.') {
        AsyncStorage.clear();
        appOperation.setCustomerToken('');
        showAlert('lnkbvkadvdakv');
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const cmsPages = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.cmsPages, null);
    if (response?.status === 200) {
      dispatch(setCmsPageData(response?.data));
    }
    dispatch(setLoading(false));
  } catch (e) {
    console.log('exception occured...', e);
    dispatch(setLoading(false));
  }
};

export const updateProfile =
  (data: FormData) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.epdateProfile,
        data,
      );
      if (response?.status === 200) {
        showSuccess('ZellCarz', response.message);
        dispatch(setUserData(response?.data));
        dispatch(getUserDetails('1'));
        NavigationService.goBack();
      } else {
        showAlert(response.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const forgotPasswoed =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.forgetPassword,
        data,
      );
      if (response?.status === 200) {
        showSuccess('ZellCarz', response.message);
        setTimeout(() => {
          NavigationService.navigate(routes.OTP, { email: data.email });
        }, 1500);
      } else {
        showAlert(response.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const forgetPasswordVerifyOTP =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.forgetPasswordVerifyOTP,
        data,
      );
      if (response?.status === 200) {
        showSuccess('ZellCarz', response.message);
        setTimeout(() => {
          NavigationService.navigate(routes.CHANGEPASS, { email: data.email });
        }, 1500);
      } else {
        showAlert(response.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const changePassword =
  (data: any) => async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    try {
      const response: any = await appOperation.post(
        endPoint.changePassword,
        data,
      );
      if (response?.status === 200) {
        showSuccess('ZellCarz', response.message);
        setTimeout(() => {
          NavigationService.navigate(routes.PASSWORD_SUCCESS, { key: 'Password' });
        }, 1500);
      } else {
        showAlert(response.message);
      }
      dispatch(setLoading(false));
    } catch (e) {
      console.log('exception occured...', e);
      dispatch(setLoading(false));
    }
  };

export const DeleteCustomer = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.deleteCustomer);
    if (response.status === 200) {
      // AsyncStorage.clear();
      appOperation.setCustomerToken('');
      storeStringData(USER_TOKEN, '');
      dispatch(setLoading(false));
      NavigationService.reset(routes.CHOOSELANGUAGE);
      showSuccess('Success', response.message);
    } else {
      dispatch(setLoading(false));
      showError(response.message);
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.log('Errr', e);
  }
};

export const logOutCustomer = () => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  try {
    const response: any = await appOperation.get(endPoint.logoutCustomer);
    if (response.status === 200) {
      storeStringData(USER_TOKEN, '');
      appOperation.setCustomerToken(null);
      dispatch(setLoading(false));
      dispatch({type: 'auth/reset'});
      NavigationService.reset(routes.CHOOSELANGUAGE);
      showSuccess('Success', response.message);
    } else {
      dispatch(setLoading(false));
      showError(response.message);
    }
  } catch (e) {
    dispatch(setLoading(false));
    console.log('Errr', e);
  }
};
