import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect } from 'react'
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
import TextInput_Custom from '../../components/textinput';
import Button from '../../components/Button'
const AddCardDetail = ({navigation}:any) => {
    return (
        <SafeAreaView style={defaultStyles.Contenier}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
            <Header lable='Add  Card Detail' />

            <ScrollView style={styles.Secound_Contenier}>
                <TextInput_Custom
                    lable_text={All_Text.Card_Number}
                    placeholder={All_Text.Enter_card_number}

                    keyboardType='phone-pad'
                    value
                    onChangeText

                />

                <View style={styles.Expiry_Contenier}>
                    <TextInput_Custom
                        lable_text={All_Text.Expiry_Date}
                        placeholder={All_Text.Enter_expiry_date}
                        style={{ width: scale(155) }}
                        keyboardType='phone-pad'
                        value
                        onChangeText

                    />
                    <TextInput_Custom
                        lable_text={All_Text.CVV}
                        placeholder={All_Text.Enter_CVV_number}
                        style={{ width: scale(155) }}

                        keyboardType='phone-pad'
                        value
                        onChangeText

                    />
                </View>

                <TextInput_Custom
                    lable_text={All_Text.Card_Holder_Name}
                    placeholder={All_Text.Enter_card_holder_name}

                    keyboardType='default'
                    value
                    onChangeText

                />

                <View style={styles.Save_Contenier}>
                    <Image style={defaultStyles.Check} source={BGImages.CHECK} />
                    <Text style={styles.Save_Card_Details}>{All_Text.Save_Card_Details}</Text>
                </View>

            </ScrollView>
            <View style={styles.Button_Contenier}>
                <Button onPress ={()=>{NavigationService.navigate(routes.SELECTPAYMENTMETHOD)}}lable={'Add Card'}  />
            </View>

        </SafeAreaView>
    )
}

export default AddCardDetail

const styles = ScaledSheet.create({
    Secound_Contenier: {
        paddingHorizontal: '15@s',
        marginTop: '30@s',
        marginBottom: '30@s',
    },
    Expiry_Contenier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '30@s',
        marginBottom: '30@s',
    },
    Save_Contenier: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '30@s'
    },
    Save_Card_Details: {
        fontSize: FONT_SIZE.text14,
        fontFamily: FontStyle.LatoRegular,
        color: COLORS.Black,
        left: '10@s'
    },
    Button_Contenier: {
        position: 'absolute',
        bottom: '20@s',
        alignSelf: 'center',
        width: '90%'
    }
})