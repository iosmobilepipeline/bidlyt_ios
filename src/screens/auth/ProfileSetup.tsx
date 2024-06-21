

import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity } from 'react-native'
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


const ProfileSetup = () => {
  return (
    <SafeAreaView style={[defaultStyles.Contenier]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <ImageBackground resizeMode='cover' style={[defaultStyles.BACKGROUND_LOGO_STYLES]} source={BGImages.BACKGROUND_LOGO} >
        <Image style={[defaultStyles.lOGO_STYLES]} source={BGImages.LOGO} />
        <View style={styles.Login_Contenier}>
          <ImageBackground resizeMode='contain' style={styles.Profile} source={BGImages.PROFILE}>
            <TouchableOpacity style={styles.Camera_Contenier}>
              <Image style={styles.Camera} source={BGImages.CAMERA} />
            </TouchableOpacity>
          </ImageBackground>

          <Text style={styles.Login_Text}>{All_Text.Profile_Setup}</Text>
          <View style={styles.Border}></View>
        </View>
      </ImageBackground>

      <ScrollView contentContainerStyle={[defaultStyles.Scrool_Style]} style={styles.Main_Contenier}>
        <Text style={styles.Phone_Number}>{All_Text.Dont_Worry}</Text>
        <View style={[defaultStyles.Button_Top]}>
          <TextInput_Custom
            keyboardType='phone-pad'
            lable_text={All_Text.Number}
          />
          <View style={[defaultStyles.Button_Top]}>
            <TextInput_Custom
              keyboardType='default'
              lable_text={All_Text.Name}
            />
          </View>

          <View style={[defaultStyles.Button_Top]}>
            <TextInput_Custom
              keyboardType='default'
              lable_text={All_Text.Username}
            />
          </View>
          <View style={[defaultStyles.Button_Top]}>
            <TextInput_Custom
              keyboardType='default'
              lable_text={All_Text.Email}
            />
          </View>

        </View>
        <View style={[defaultStyles.Button_Top]}>
          <Button
            lable={All_Text.Continue}
            onPress={() => {
              console.log('sdxfcgvhjkl');

              NavigationService.navigate(routes.NAVIGATION_NON_AUTH_LOADING_STACK)
            }}
          />
        </View>



      </ScrollView>



    </SafeAreaView>
  )
}

export default ProfileSetup

const styles = ScaledSheet.create({
  Main_Contenier: {
    paddingHorizontal: '15@s'
  },
  Login_Contenier: {
    paddingHorizontal: '15@s',
    top: '22%'
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
    textDecorationLine: 'underline'

  },
  Privacy_Policy_Contenier: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '2@s'
  },
  Profile: {
    width: '84@s',
    height: '84@vs',
    borderRadius: '42@s',
    alignSelf: 'center'
  },
  Camera_Contenier: {
    position: 'absolute',
    bottom: '0@s',
    right: '0@s'
  },
  Camera: {
    width: '30@s',
    height: '30@vs',
    resizeMode: 'contain'
  }

})