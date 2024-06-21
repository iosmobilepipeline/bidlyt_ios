import { AnyAction, EmptyObject, combineReducers } from 'redux';
import authReducer from './reduxCustomer/slices/authSlice';
import renterReducer from './reduxRenter/slices/renterSlice';
import customerReducer from './reduxCustomer/slices/customerSlice';

export const combinedReducer = combineReducers({
  authReducer: authReducer,
  renterReducer: renterReducer,
  customerReducer: customerReducer,
});

const rootReducer = (state: EmptyObject | undefined, action: AnyAction) => {
  if (action.type === 'auth/reset') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export type RootState = ReturnType;

export default rootReducer;
