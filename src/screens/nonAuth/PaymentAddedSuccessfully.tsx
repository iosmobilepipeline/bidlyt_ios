import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity, Modal, FlatList, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { BGImages } from '../../asstes';
import { defaultStyles } from '../../asstes/styles';
import { All_Text } from '../../utils/TextData';
import { FONT_SIZE } from '../../asstes/Font';
import { COLORS } from '../../asstes/colors';
import Swiper from 'react-native-swiper'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import NavigationService from '../../routes/NavigationService';
import { routes } from '../../routes/routes';
import { FontStyle } from '../../asstes/fonts/Font';
import Header from '../../components/Header';
import Button from '../../components/Button';

const PaymentAddedSuccessfully = () => {
  return (
    <SafeAreaView style={styles.Contenier}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
<ImageBackground borderRadius={25} style={styles.SUCCES_bg} source={BGImages.PAYMENT_BG}>
<Image  style={styles.SUCCES_Icon} source={BGImages.SUCCES}/>
<Text style={styles.Payment_Added_Successfully}>{All_Text.Payment_Added_Successfully}</Text>
</ImageBackground>

<View style={defaultStyles.Button_Contenier}>
<Button lable={'Ok'}/>
</View>
    </SafeAreaView>
  )
}

export default PaymentAddedSuccessfully

const styles = ScaledSheet.create({
  Contenier:{flex:1,paddingHorizontal:'15@s'},
  SUCCES_bg:{
height:'464@vs',
marginTop:'70@s',
justifyContent:'center',
alignItems:'center'
  },
  SUCCES_Icon:{
    height:'150@s',
    width:'150@s',
    resizeMode:'contain'
  },
  Payment_Added_Successfully:{
    fontSize:FONT_SIZE.text22,
    fontFamily:FontStyle.LatoBold,
    color:COLORS.Black,
    fontWeight:'700',
    marginTop:'30@s'
  }
})