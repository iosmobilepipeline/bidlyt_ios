import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';
import SignUp from '../screens/auth/SignUp';
import Splash from '../screens/auth/Splash';
import Otp from '../screens/auth/Otp';
import ProfileSetup from '../screens/auth/ProfileSetup';
// import BottomTab from '../screens/nonAuth/BottomTab'
import Home from '../screens/nonAuth/Home';
import Auction from '../screens/nonAuth/Auction';
import Float from '../screens/nonAuth/Float';
import Favorites from '../screens/nonAuth/Favorites';
import Dashboard from '../screens/nonAuth/Dashboard';
import { CustomBottomTabBar } from '../components/customBottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SeeAllItems from '../screens/nonAuth/SeeAllItems';
import Product from '../screens/nonAuth/Product';
import AddCardDetail from '../screens/nonAuth/AddCardDetail';
import SelectPaymentMethod from '../screens/nonAuth/SelectPaymentMethod';
import AddNewCard from '../screens/nonAuth/AddNewCard';
import PaymentAddedSuccessfully from '../screens/nonAuth/PaymentAddedSuccessfully';



const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


export const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_STACK}
      component={AUTHSTACK}
    />
     <Stack.Screen
      name={routes.NAVIGATION_NON_AUTH_LOADING_STACK}
      component={NONAUTHSTACK}
    />

  </Stack.Navigator>
);

export const AUTHSTACK = () => (
  <Stack.Navigator

    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={routes.NAVIGATION_AUTH_LOADING_SCREEN}
      component={Splash}
    />
    <Stack.Screen
      name={routes.SIGNUP}
      component={SignUp}
    />
    <Stack.Screen
      name={routes.OTP}
      component={Otp}
    />
    <Stack.Screen
      name={routes.PROFILSETUP}
      component={ProfileSetup}
    />
  </Stack.Navigator>
);
export const NONAUTHSTACK = () => (
  <Stack.Navigator
initialRouteName={routes.BOTTOM_TAB}
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen
      name={routes.BOTTOM_TAB}
      component={CUSTOMER_BOTTOM_TAB_STACK}
    />
     <Stack.Screen
      name={routes.HOME}
      component={Home}
    />
       <Stack.Screen
      name={routes.AUCTION}
      component={Auction}
    />
     <Stack.Screen
      name={routes.Float}
      component={Float}
    />
     <Stack.Screen
      name={routes.FAVORITES}
      component={Favorites}
    />
     <Stack.Screen
      name={routes.DASHBOARD}
      component={Dashboard}
    />
       <Stack.Screen
      name={routes.SEEALLITEMS}
      component={SeeAllItems}
    />
       <Stack.Screen
      name={routes.PRODUCT}
      component={Product}
    />
   <Stack.Screen
      name={routes.ADDCARDDETAIL}
      component={AddCardDetail}
    />
  <Stack.Screen
      name={routes.SELECTPAYMENTMETHOD}
      component={SelectPaymentMethod}
    />
  <Stack.Screen
      name={routes.ADDNEWCARD}
      component={AddNewCard}
    />
     <Stack.Screen
      name={routes.PAYMENTADDEDSUCCESSFULY}
      component={PaymentAddedSuccessfully}
    />
   
  </Stack.Navigator>
);

export const CUSTOMER_BOTTOM_TAB_STACK = () => (
  <BottomTab.Navigator
    initialRouteName={routes?.HOME}
    tabBar={props => (
      <CustomBottomTabBar
        {...props}
        state={{ ...props.state, routes: props.state.routes.slice(0, 5) }}
      />
    )}
    screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
    <BottomTab.Screen name={routes.HOME} component={Home} />
    <BottomTab.Screen name={routes.AUCTION} component={Auction} />
    <BottomTab.Screen name={routes.Float} component={Float} />
    <BottomTab.Screen name={routes.FAVORITES} component={Favorites} />
    <BottomTab.Screen name={routes.DASHBOARD} component={Dashboard} />
  </BottomTab.Navigator>
);


