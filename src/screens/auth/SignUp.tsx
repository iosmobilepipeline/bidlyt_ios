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
import { FontStyle } from '../../asstes/fonts/Font';


const SignUp = () => {
    return (
        <SafeAreaView style={[defaultStyles.Contenier]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />



            <ImageBackground resizeMode='cover' style={[defaultStyles.BACKGROUND_LOGO_STYLES]} source={BGImages.BACKGROUND_LOGO} >
                <Image style={[defaultStyles.lOGO_STYLES]} source={BGImages.LOGO} />
                <View style={styles.Login_Contenier}>
                    <Text style={styles.Login_Text}>{All_Text.Login_or_Register}</Text>
                    <View style={styles.Border}></View>
                </View>
            </ImageBackground>

            <ScrollView style={styles.Main_Contenier}>
                <Text style={styles.Phone_Number}>{All_Text.PHONE_NUMBER}</Text>
                <View style={[defaultStyles.Button_Top]}>
                    <TextInput_Custom
                        lable_text={All_Text.Number}
                        keyboardType='phone-pad'
                        value
                        onChangeText

                    />
                </View>
                <View style={[defaultStyles.Button_Top]}>
                    <Button
                        lable={All_Text.Send_OTP}
                        onPress={() => {
                            NavigationService.navigate(routes.OTP)
                        }}
                    />
                </View>


                <Text style={[styles.By_signing_up, {
                    marginTop: '30%'
                }]}>{All_Text.By_signing_up}</Text>
                <View style={styles.Privacy_Policy_Contenier}>
                    <Text style={styles.Terms_Conditions}>{All_Text.Terms_Conditions}</Text>
                    <Text style={[styles.Terms_Conditions, { color: COLORS.Black, textDecorationLine: 'none' }]}>{All_Text.And}</Text>
                    <Text style={styles.Terms_Conditions}>{All_Text.Privacy_Policy}</Text>

                </View>
            </ScrollView>



        </SafeAreaView>
    )
}

export default SignUp

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
        color: COLORS.Paret,
        fontFamily:FontStyle.LatoRegular
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
    }

})