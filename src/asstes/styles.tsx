
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale,
    s,
    scale,
    verticalScale,
    vs,
    ScaledSheet
} from 'react-native-size-matters';
import { COLORS } from './colors';
import { FONT_SIZE } from './Font';
import { FontStyle } from './fonts/Font';


// const screenWidth = Dimensions.get('window').width;

const defaultStyles = ScaledSheet.create({
    Contenier: { flex: 1, },
    BACKGROUND_LOGO_STYLES: {
        height: '327@vs',
        width: '100%',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    lOGO_STYLES: {
        width: '150@s',
        height: '30@vs',
        resizeMode: 'contain',
        alignSelf: 'center',
        bottom: '15%'

    },
    Button_Top: {
        marginTop: '9%',
    },
    Scrool_Style: {
        paddingBottom: '40@s'
    },
    bottom_tab_bg: {
        height: '92@s',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Bottom_Icon: {
        width: '24@s',
        height: '24@vs',
        resizeMode: 'contain'
    },
    Bottom_Icon_Contnier: {
        marginHorizontal: '20@s',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    Icon_Contenier: {
        alignItems: 'center',
        marginTop: '60@s'
    },

    Icon_Text: {
        fontSize: FONT_SIZE.text12,
        color: COLORS.Gray,
    },
    Bottom_Icon_Float: {
        width: '54@s',
        height: '54@vs',
        resizeMode: 'contain',
        bottom: '38@s'
    },
    Bell: {
        width: '22@s',
        height: '22@vs',
        resizeMode: 'contain',
    },
    Bell_Contenier: {
        width: '40@s',
        height: '40@vs',
        borderRadius: '10@s',
        borderWidth: '1@s',
        borderColor: COLORS.White,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '0@s',
        flexDirection: 'row'
    },
    Header_Text: {
        marginLeft: '15@s'
    },
    Search: {
        width: '20@s',
        height: '20@s',
        resizeMode: 'contain'
    },
    Category: {
        fontSize: FONT_SIZE.text18,
        color: COLORS.Black,
        fontWeight: '700',
        marginTop: '15@s',
        marginBottom: '10@s'
    },
    Main_Style: {
        paddingHorizontal: '15@s',
        marginTop: '15@s',

    },
    Category_Icon: {
        width: '32@s',
        height: '40@vs',
        resizeMode: 'contain'
    },
    Category_Icon_Camera: {
        width: '55@s',
        height: '34@vs',
        resizeMode: 'contain'
    },
    Category_Icon_Contenier: {
        width: '70@s',
        height: '70@vs',
        borderRadius: '8@s',
        backgroundColor: COLORS.Paret,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Category_Icon_Contenier_Brand: {
        width: '70@s',
        height: '70@vs',
        borderRadius: '35@s',
        backgroundColor: COLORS.Light_Gary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Video: {
        height: '176@s',
        width: '100%',
        resizeMode: 'contain',
    },
    Featured_Items_Contnier: {
        paddingHorizontal: '10@s',
        marginTop: '3@s'
    },
    Xiaomi: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    IICON: {
        width: '16@s',
        height: '16@vs',
        resizeMode: 'contain'
    },
    Xiaomi_Text: {
        fontSize: FONT_SIZE.text18,
        color: COLORS.Black
    },
    Xiaomi_Brand: {
        fontSize: FONT_SIZE.text12,
        color: COLORS.Black,
        width: '100@s',
        marginTop: '5@s',
        marginBottom: '5@s'
    },
    DOLLOR_CUT: {
        fontSize: FONT_SIZE.text14,
        color: COLORS.Gray,
        textDecorationLine: 'line-through',
        marginLeft: '6@s'

    },
    DOLOR: {
        fontSize: FONT_SIZE.text16,
        color: COLORS.Paret
    },
    DOLLOR_CUT_Contenier: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    list_Contenier: { margin: '3@s', flex: 1 },
    BackArrow: {
        width: '8@s',
        height: '14@s',
        resizeMode: 'contain'
    },
    Continue:{
        fontSize: FONT_SIZE.text16,
        fontFamily:FontStyle.LatoBold,
        color: COLORS.White
    },
    Check:{
        width:'24@s',
        height:'24@vs',
        resizeMode:'contain'
    },
    Right:{
        width:'20@s',
        height:'20@s',
        resizeMode:'contain'
    },
    Add_New_Card:{
        fontSize: FONT_SIZE.text16,
        fontFamily:FontStyle.LatoBold,
        color: COLORS.Black,
        left:'10@s'
    },
    PAYPAL:{
        width:'30@s',
        height:'30@s',
        resizeMode:'contain'
    },
    Button_Contenier:{
        width:'100%',
        position:'absolute',
        bottom:'15@s',
        alignSelf:'center'
    }

});

export { defaultStyles };
