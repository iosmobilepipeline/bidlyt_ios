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

const SelectPaymentMethod = () => {
    const allCard = [{ id: 1, card_Name: 'Bidlyt Wallet', IMG: BGImages.WALLET },
    { id: 2, card_Name: 'PayPal', IMG: BGImages.PAYPAL },
    { id: 3, card_Name: 'Affirm', IMG: BGImages.AFFIRM },
    { id: 4, card_Name: 'Apple Pay', IMG: BGImages.APPLE_ICON },
    { id: 4, card_Name: '****  **** **** 2154', IMG: BGImages.MASTER_CARD },
    { id: 5, card_Name: '****  **** **** 8457', IMG: BGImages.VISA }]
    const Card_Detail = ({ item }: any) => {
        return (
            <View>
                <TouchableOpacity style={styles.Bidlyt_Wallet} >
                    <View style={styles.Bidlyt_Wallet_Contnier}>

                        <View style={styles.Bidlyt_Wallet_BG}>
                            <Image style={defaultStyles.PAYPAL} source={item.IMG} />
                        </View>
                        <Text style={defaultStyles.Add_New_Card}>{item.card_Name}</Text>
                    </View>
                    <Image style={defaultStyles.Right} source={BGImages.UN_CHECK_CIRCLE} />

                </TouchableOpacity>
                {
                    item.card_Name == 'Bidlyt Wallet' ?
                        <Text style={[defaultStyles.Add_New_Card, { marginTop: scale(5), marginBottom: scale(5) }]}>{All_Text.All_Cards}</Text> : null
                }

            </View>


        )
    }
    return (
        <SafeAreaView style={[defaultStyles.Contenier, { backgroundColor: COLORS.White }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
            <Header lable='Select Payment Method' />
<ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.Contenier}>
                <TouchableOpacity onPress={()=>{NavigationService.navigate(routes.ADDNEWCARD)}} style={[styles.Add_New_Card_Contenier, { marginTop: scale(15) }]}>
                    <Image style={defaultStyles.Right} source={BGImages.PLUS} />
                    <Text style={defaultStyles.Add_New_Card}>{All_Text.Add_New_Card}</Text>
                </TouchableOpacity>




                <FlatList data={allCard} renderItem={Card_Detail} />

<View style={styles.MASTER_CARD}>
<Button onPress={()=>{NavigationService.navigate(routes.PAYMENTADDEDSUCCESSFULY)}} lable={All_Text.Continue}/>
</View>




            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SelectPaymentMethod

const styles = ScaledSheet.create({
    Contenier: {
        paddingHorizontal: '15@s'
    },
    Add_New_Card_Contenier: {
        width: '100%',
        height: '60@vs',
        borderWidth: '1@s',
        borderStyle: 'dashed',
        borderRadius: '6@s',
        borderColor: COLORS.Paret,
        backgroundColor: COLORS.Light_Paret,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '15@s'
    },
    Bidlyt_Wallet: {
        width: '100%',
        height: '70@vs',
        borderWidth: '1@s',
        borderRadius: '6@s',
        borderColor: COLORS.Paret,
        backgroundColor: COLORS.Light_Paret,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '15@s',
        marginTop: '10@s',
        marginBottom: '10@s'
    },
    Bidlyt_Wallet_Contnier: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Bidlyt_Wallet_BG: {
        width: '50@s',
        height: '50@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.Paret
    },
    MASTER_CARD: {
        marginTop: '15@s'
    },
    contentContainerStyle:{
        paddingBottom:'40@s'
    }
})