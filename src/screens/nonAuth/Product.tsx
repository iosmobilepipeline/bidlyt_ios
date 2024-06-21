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

const Product = () => {
    const [modalVisible, setModalVisible] = useState<any>(false);
    const [modalUltimate, setModalUltimate] = useState<any>(false);
    const [modalVisible_Ultimate, setModalVisible_Ultimate] = useState<any>(false);
    const ultimate = [
        { id: 1, Ultimate_Lable: 'Ultimate', Dollor: '$9.99' },
        { id: 2, Ultimate_Lable: 'Boomerang', Dollor: '$5.99' },
        { id: 3, Ultimate_Lable: 'Ghost', Dollor: '$3.99' },
        { id: 4, Ultimate_Lable: 'Insight', Dollor: '$1.99' },
        { id: 5, Ultimate_Lable: 'Basic', Dollor: 'Free' }]
    return (
        <SafeAreaView style={defaultStyles.Contenier}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='light-content' />
            <ImageBackground resizeMode='cover' style={defaultStyles.Contenier} source={BGImages.MOBILEDETAIL}>
                <View style={styles.Main_Contnier}>
                    <View style={styles.Header_Contenier}>
                        <TouchableOpacity style={styles.Back_Contenier} onPress={() => { NavigationService.goBack() }}>
                            <Image style={[defaultStyles.BackArrow, { tintColor: '#fff' }]} source={BGImages.BACKARROWE} />
                        </TouchableOpacity>

                        <View style={styles.Filter_Contenier_Main}>
                            <TouchableOpacity style={[styles.Filter_Contenier, { right: scale(10) }]}>
                                <Image source={BGImages.FILTER} style={styles.Filter} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.Filter_Contenier}>
                                <Image source={BGImages.BELL} style={styles.Filter} />
                            </TouchableOpacity>


                        </View>


                    </View>




                </View>
                <View style={styles.Text_Contenier}>

                    <View style={styles.Xiaomi_Contenier}>

                        <View style={styles.Filter_Contenier_Main}>
                            <Text style={styles.Xiaomi}>{All_Text.Xiaomi}</Text>
                            <Image style={[defaultStyles.IICON, { left: scale(7) }]} source={BGImages.WHITE_I} />
                        </View>

                        <Text style={styles.DOLOR}>{All_Text.DOLOR}</Text>


                    </View>
                    <View style={[styles.Filter_Contenier_Main, { justifyContent: 'space-between' }]}>
                        <Text numberOfLines={2} style={styles.XIAOMI_NAME}>{All_Text.XIAOMI_NAME}</Text>
                        <View>
                            <Text style={styles.DOLLOR_CUT}>{All_Text.DOLLOR_CUT}</Text>
                            <Text style={styles.UNIT}>{All_Text.Unit}: 12</Text>

                        </View>


                    </View>
                    <View style={[styles.Filter_Contenier_Main, { marginTop: scale(10) }]}>
                        <Image style={styles.clock} source={BGImages.CLOCK} />
                        <Text style={styles.Time}>01:20:15</Text>
                    </View>

                    <View style={[styles.Filter_Contenier_Main, { justifyContent: 'space-between', marginTop: scale(30) }]}>
                        <TouchableOpacity style={styles.heart_Contenier}>
                            <Image style={styles.Heart} source={BGImages.BLACK_HEART} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setModalVisible(true) }} style={styles.Bid_Now_Contenier}>
                            <Image style={styles.B_LOGO} source={BGImages.B} />
                            <Text style={styles.Bid_Now}>{All_Text.Bid_Now}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.heart_Contenier}>
                            <Image style={styles.Heart} source={BGImages.SHARE} />
                        </TouchableOpacity>
                    </View>


                </View>
            </ImageBackground>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}


            >
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} style={styles.Modal_Contenier} >

                    <View style={styles.Contenier_Modal}>
                        <Text style={styles.Please_Add_Your_Payment}>{All_Text.Please_Add_Your_Payment}</Text>
                        <Text style={styles.For_placing}> {All_Text.For_placing}</Text>

                        <TouchableOpacity onPress={() => { setModalVisible(!modalVisible), setModalUltimate(true) }} style={styles.Bid_Now_Contenier}>
                            <Text style={defaultStyles.Continue}>{All_Text.Continue}</Text>
                        </TouchableOpacity>

                    </View>

                </TouchableOpacity>

            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUltimate}


            >
                <TouchableOpacity onPress={() => { setModalUltimate(!modalUltimate) }} style={styles.Modal_Contenier_Ultimate} >
                    <TouchableOpacity onPress={() => { setModalVisible_Ultimate(true) }}  style={styles.I_ICON_Contenier}>
                    <Image  style={styles.I_ICON} source={BGImages.I} />
                    </TouchableOpacity>
                

                    <FlatList data={ultimate} renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.Modal}>

                                
                                <View style={styles.Border_Style}>

                                    <View style={styles.Ultimate}>
                                        <Text style={styles.Ultimate_Text}>{item.Ultimate_Lable}</Text>

                                    </View>
                                    <Text style={styles.DOLOR}>{item.Dollor}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    }} />





                </TouchableOpacity>

            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible_Ultimate}


            >
                <TouchableOpacity onPress={() => { setModalVisible_Ultimate(!modalVisible_Ultimate) }} style={styles.modalVisible_Ultimate} >

                    <View style={styles.Contenier_Modal_Ultimate}>
                        <View style={styles.Bidlyt_Contenier}>
                            <Text style={styles.Bidlyt}>Bidlyt</Text>
                            <TouchableOpacity onPress={() => { NavigationService.navigate(routes.ADDCARDDETAIL), setModalUltimate(!modalUltimate), setModalVisible_Ultimate(!modalVisible_Ultimate) }} style={styles.Ultimate_Button}>
                                <Text style={[styles.Bidlyt, { color: COLORS.White }]}>Ultimate</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.Border_Modal} />

                        <View style={[styles.Bidlyt_Contenier, { justifyContent: 'flex-start' }]}>
                            <Image style={defaultStyles.Right} source={BGImages.RIGHT} />
                            <Text style={styles.Grants}>
                                {All_Text.GRANTS}
                            </Text>
                        </View>

                        <View style={[styles.Bidlyt_Contenier, { justifyContent: 'flex-start', marginTop: scale(10) }]}>
                            <Image style={defaultStyles.Right} source={BGImages.RIGHT} />
                            <Text style={styles.Grants}>
                                {All_Text.PERFECT}
                            </Text>
                        </View>


                    </View>

                </TouchableOpacity>

            </Modal>


        </SafeAreaView>
    )
}

export default Product

const styles = ScaledSheet.create({
    Header_Contenier: {
        marginTop: '30@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Main_Contnier: {
        paddingHorizontal: '20@s',
        flex: 1
    },
    Back_Contenier: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30@s',
        height: '30@vs'
    },
    Filter: {
        width: '20@s',
        height: '18@vs',
        resizeMode: 'contain'
    },
    Filter_Contenier_Main: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Xiaomi_Contenier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Text_Contenier: {
        position: 'absolute',
        bottom: '15@s',
        paddingHorizontal: '20@s',
        width: '100%'

    },
    Filter_Contenier: {
        borderWidth: '1@s',
        borderColor: COLORS.White,
        width: '40@s',
        height: '40@vs',
        borderRadius: '10@s',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Xiaomi: {
        fontSize: FONT_SIZE.text20,
        fontFamily: FontStyle.LatoBold,
        color: COLORS.White
    },
    DOLOR: {
        fontSize: FONT_SIZE.text22,
        color: COLORS.Paret,
        fontFamily: FontStyle.LatoBold,
        fontWeight: '800'
    },
    XIAOMI_NAME: {
        fontSize: FONT_SIZE.text14,
        color: COLORS.White,
        fontFamily: FontStyle.LatoRegular,
        width: '210@s',

    },
    DOLLOR_CUT: {
        fontSize: FONT_SIZE.text18,
        color: COLORS.White,
        textDecorationLine: 'line-through',
        fontFamily: FontStyle.LatoRegular,
    },
    UNIT: {
        fontSize: FONT_SIZE.text18,
        color: COLORS.White,
        fontFamily: FontStyle.LatoRegular,
    },

    clock: {
        width: '12@s',
        height: '12@vs',
        resizeMode: 'contain'
    },
    Time: {
        fontSize: FONT_SIZE.text12,
        color: COLORS.White,
        left: '3@s',
        fontFamily: FontStyle.LatoBold
    },
    heart_Contenier: {
        width: '46@s',
        height: '46@vs',
        borderRadius: '10@s',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.White
    },
    Heart: {
        width: '24@s',
        height: '22@vs',
        resizeMode: 'contain',
    },
    Bid_Now_Contenier: {
        width: '200@s',
        height: '46@vs',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.Paret,
        borderRadius: '6@s'
    },
    B_LOGO: {
        width: '12.83@s',
        height: '16@vs',
        resizeMode: 'contain',
        marginHorizontal: '5@s'
    },
    Bid_Now: {
        fontSize: FONT_SIZE.text16,
        color: COLORS.White,
        fontFamily: FontStyle.LatoBold
    },
    Modal_Contenier: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(000, 000, 000, .7)',


    },
    modalVisible_Ultimate: {
        flex: 1,
        alignItems: 'center',
    },
    Modal_Contenier_Ultimate: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(000, 000, 000, .7)',
    },
    Modal: {
        width: '115@s',
        height: '115@vs',
        backgroundColor: COLORS.White,
        borderRadius: '75@s',
        marginTop: '10@s',
        marginBottom: '10@s',
        justifyContent: 'center',
        alignItems: 'center'

    },
    Border_Style: {
        width: '100@s',
        height: '100@vs',
        borderWidth: '1@s',
        borderRadius: 75,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'

    },
    Contenier_Modal: {
        width: '307@s',
        height: '197@vs',
        backgroundColor: COLORS.White,
        borderRadius: '10@s',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Contenier_Modal_Ultimate: {
        width: '315@s',
        height: '195@vs',
        backgroundColor: COLORS.White,
        borderRadius: '10@s',
        marginTop: '75@s',
        padding: '15@s'
    },
    Bidlyt_Contenier: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Grants: {
        fontSize: FONT_SIZE.text14,
        fontFamily: FontStyle.LatoRegular,
        color: COLORS.Black,
        left: '5@s'
    },
    Bidlyt: {
        fontSize: FONT_SIZE.text16,
        fontFamily: FontStyle.LatoRegular,
        color: COLORS.Black,
    },
    Ultimate_Button: {
        width: '89@s',
        height: '31@s',
        borderRadius: '5@s',
        backgroundColor: COLORS.Paret,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Please_Add_Your_Payment: {
        fontSize: FONT_SIZE.text18,
        fontFamily: FontStyle.LatoBold,
        color: COLORS.Black
    },
    For_placing: {
        fontSize: FONT_SIZE.text16,
        fontFamily: FontStyle.LatoRegular,
        color: COLORS.Black,
        textAlign: 'center',
        lineHeight: '19.2@s',
        marginTop: '10@s',
        marginBottom: '20@s'
    },
    Ultimate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Ultimate_Text: {
        fontSize: FONT_SIZE.text14,
        fontFamily: FontStyle.LatoBold,
        color: COLORS.Black
    },
    Border_Modal: {
        width: '100%',
        borderWidth: 0.2,
        marginTop: '10@s',
        borderColor: COLORS.Gray,
        marginBottom: '10@s'
    },
    I_ICON:{
        width: '16@s',
        height: '16@vs',
        resizeMode: 'contain',
      
    },
    I_ICON_Contenier:{
        position:'absolute',
        left:'10@s' ,
        top:'30@s',
        width:'50@s',
        height:'50@vs',
        justifyContent:'center',
        alignItems:'center',
    }
})