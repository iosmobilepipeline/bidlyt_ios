import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { BGImages } from '../../asstes';
import { defaultStyles } from '../../asstes/styles';
import { All_Text } from '../../utils/TextData';
import { FONT_SIZE } from '../../asstes/Font';
import { COLORS } from '../../asstes/colors';
import TextInput_Custom from '../../components/textinput';
import Button from '../../components/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavigationService from '../../routes/NavigationService';
import { routes } from '../../routes/routes';
import OTPBOX from '../../components/otpBox';

const Otp = () => {
  return (
    <SafeAreaView style={[defaultStyles.Contenier]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />



      <ImageBackground resizeMode='cover' style={[defaultStyles.BACKGROUND_LOGO_STYLES]} source={BGImages.BACKGROUND_LOGO} >
        <Image style={[defaultStyles.lOGO_STYLES]} source={BGImages.LOGO} />
        <View style={styles.Login_Contenier}>
          <Text style={styles.Login_Text}>{All_Text.OTP_Verification}</Text>
          <View style={styles.Border}></View>
        </View>
      </ImageBackground>
      <ScrollView style={styles.Main_Contenier}>
        <Text style={styles.Phone_Number}>{All_Text.ENTER_THE_CODE}</Text>

        <OTPBOX
          pinCount={4}
        />

        <Text style={[styles.Terms_Conditions, { color: COLORS.Black }]}>{All_Text.DONT_RECIVE_CODE}<Text style={[styles.Terms_Conditions, { textDecorationLine: 'underline' }]}>{All_Text.Resend}</Text></Text>



        <View style={[defaultStyles.Button_Top]}>
          <Button
            lable={All_Text.Verify}
            onPress={() => {
              NavigationService.navigate(routes.PROFILSETUP)
            }}
          />
        </View>


      </ScrollView>



    </SafeAreaView>
  )
}

export default Otp

const styles = ScaledSheet.create({
  Main_Contenier: {
    paddingHorizontal: '15@s'
  },
  Login_Contenier: {
    paddingHorizontal: '15@s',
    top: '35%'
  },
  Login_Text: {
    fontSize: FONT_SIZE.text16,
    color: COLORS.Paret
  },
  Border: {
    height: '2@vs',
    width: '25@s',
    backgroundColor: COLORS.Paret,
    marginTop: '10@s'

  },
  Phone_Number: {
    fontSize: FONT_SIZE.text20,
    color: COLORS.Black,
    marginTop: '10@s'
  },
  By_signing_up: {
    fontSize: FONT_SIZE.text14,
    color: COLORS.Black,
  },
  Terms_Conditions: {
    fontSize: FONT_SIZE.text14,
    color: COLORS.Paret,
    lineHeight: '20@s',
    marginTop: '15%',
    marginBottom: '1%',
    textAlign: 'center'
  },
})