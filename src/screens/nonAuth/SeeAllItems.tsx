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
import Header from '../../components/Header';

const SeeAllItems = () => {
  const mobiles = [{}, {}, {}, {}, {}, {}]

  const mobilesData = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>{NavigationService.navigate(routes.PRODUCT)}}  style={defaultStyles.list_Contenier}>
        <View style={styles.Mobiles_Contnier}>
          <ImageBackground borderTopRightRadius={6} borderTopLeftRadius={6} style={styles.Mobile} source={BGImages.MOBILE}>
            <TouchableOpacity style={styles.Heart_Contenier}>
              <Image style={styles.Heart} source={BGImages.Heart} />
            </TouchableOpacity>
          </ImageBackground>

          <View style={defaultStyles.Featured_Items_Contnier}>
            <View style={defaultStyles.Xiaomi}>
              <Text numberOfLines={1} style={defaultStyles.Xiaomi_Text}>{All_Text.Xiaomi}</Text>
              <Image style={defaultStyles.IICON} source={BGImages.I} />


            </View>
            <Text numberOfLines={1} style={defaultStyles.Xiaomi_Brand}>{All_Text.Xiaomi_Brand}</Text>
            <View style={defaultStyles.DOLLOR_CUT_Contenier}>
              <Text style={defaultStyles.DOLOR}>{All_Text.DOLOR}</Text>
              <Text style={defaultStyles.DOLLOR_CUT} >{All_Text.DOLLOR_CUT}</Text>
            </View>

            <View style={[defaultStyles.DOLLOR_CUT_Contenier, { marginTop: scale(5) }]}>
              <Text style={[styles.Time, { color: COLORS.Black, fontSize: FONT_SIZE.text13 }]}>{All_Text.Unit}: 12</Text>

              <View style={[styles.Clock_Conteier, { marginLeft: scale(20) }]}>
                <Image style={styles.clock} source={BGImages.CLOCK} />
                <Text style={[styles.Time, { color: COLORS.Black }]}>01:20:15</Text>
              </View>
            </View>

          </View>
        </View>
      </TouchableOpacity>


    )
  }
  return (
    <SafeAreaView style={defaultStyles.Contenier}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
            <Header lable="All Items"/>

            <ScrollView style={styles.Contenier} contentContainerStyle={defaultStyles.Scrool_Style}>
            <FlatList
            data={mobiles}
            renderItem={mobilesData}
            numColumns={2}

          />
            </ScrollView>

    </SafeAreaView>
  )
}

export default SeeAllItems

const styles = ScaledSheet.create({
  Contenier:{paddingHorizontal:'15@s'},
  Mobiles_Contnier: {
    // width: '155@s',
    height: '260@s',
    backgroundColor: COLORS.White,
    borderRadius: '6@s',
    marginTop: '5@s',
    elevation: '1@s',
    borderWidth: '1@s',
    borderColor: COLORS.Paret,

  },
  Mobile: {
    // width: '166@s',
    height: '139@s',
    resizeMode: 'contain'
  },
  Heart_Contenier: {
    width: '28@s',
    height: '28@vs',
    borderRadius: '6@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.White,
    position: 'absolute',
    right: '10@s',
    top: '10@s'
  },
  Heart: {
    width: '15@s',
    height: '14@vs',
    resizeMode: 'contain'
  },
  Clock_Conteier: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  clock: {
    width: '18@s',
    height: '18@s',
    resizeMode: 'contain'
  },
  Time: {
    fontSize: FONT_SIZE.text13,
    color: COLORS.White,
    left: '3@s'
  },
})