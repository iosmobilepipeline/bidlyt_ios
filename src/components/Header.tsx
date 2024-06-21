import { StatusBar, ImageBackground, SafeAreaView, Image, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { defaultStyles } from '../asstes/styles';
import { BGImages } from '../asstes';
import { FONT_SIZE } from '../asstes/Font';
import { FontStyle } from '../asstes/fonts/Font';
import { COLORS } from '../asstes/colors';
import NavigationService from '../routes/NavigationService';


const Header = (props: any) => {
    return (
        <View >
            <View style={styles.Header_Contenier}>
                <TouchableOpacity onPress={() => { NavigationService.goBack() }} style={styles.Back_contnier}>
                    <Image style={defaultStyles.BackArrow} source={BGImages.BACKARROWE} />

                </TouchableOpacity>
                <Text style={styles.Lable}>{props.lable}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = ScaledSheet.create({
    Header_Contenier: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30@s',
        paddingHorizontal: '15@s',
        marginBottom: '20@s'
    },

    Lable: {
        fontSize: FONT_SIZE.text18,
        fontFamily: FontStyle.LatoBold,
        color: COLORS.Black
    },
    Back_contnier: { position: 'absolute', left: '10@s', justifyContent: 'center', alignItems: 'center', width: '30@s', height: '30@vs' }
})