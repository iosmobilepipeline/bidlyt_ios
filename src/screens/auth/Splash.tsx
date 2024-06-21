import { StatusBar, ImageBackground, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { BGImages } from '../../asstes';
import NavigationService from '../../routes/NavigationService';
import { routes } from '../../routes/routes';
import { defaultStyles } from '../../asstes/styles';

const Splash = () => {
  useEffect(()=>{
    setTimeout(() => {
NavigationService.reset(routes.SIGNUP)
    }, 5000);
  },[])
  return (
    <SafeAreaView style={[defaultStyles.Contenier]}>
    <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <ImageBackground style={[defaultStyles.Contenier]} source={BGImages.SPLASHLOGO} />
    </SafeAreaView>
  )
}

export default Splash

