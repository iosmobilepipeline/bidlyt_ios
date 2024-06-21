

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


const Home = () => {
  const data = [{}, {}, {}, {}, {}]
  const data1 = [{}, {}, {}, {}, {}]
  const mobiles = [{}, {}, {}, {}, {}, {}]

  const Shop_Brand = () => {
    return (
      <View style={styles.List_Contenier}>
        <TouchableOpacity style={defaultStyles.Category_Icon_Contenier}>
          <Image style={defaultStyles.Category_Icon} source={BGImages.APPLE_WHITE} />
        </TouchableOpacity>
      </View>

    )
  }
  const Shop_Category = () => {
    return (
      <View style={styles.List_Contenier}>
        <TouchableOpacity style={defaultStyles.Category_Icon_Contenier_Brand}>
          <Image style={defaultStyles.Category_Icon_Camera} source={BGImages.CAMERA_SHOT} />
        </TouchableOpacity>
        <Text style={styles.Cameras}>{All_Text.Cameras}</Text>
      </View>

    )
  }
  const mobilesData = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={()=>{NavigationService.navigate(routes.PRODUCT)}} style={defaultStyles.list_Contenier}>
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

      <ImageBackground style={styles.Header_Bg} source={BGImages.HOME_HEADER} resizeMode='cover'>
        <View style={styles.Main_Contenier_Header}>

          <View style={styles.header_Contenier}>
            <Image style={styles.Profile} source={BGImages.PROFILE} />
            <View style={defaultStyles.Header_Text}>
              <Text style={styles.Hello}>{All_Text.Hello}</Text>
              <Text style={styles.Name}>{All_Text.John_William}</Text>

            </View>

            <TouchableOpacity style={defaultStyles.Bell_Contenier}>

              <Image style={defaultStyles.Bell} source={BGImages.BELL} />
              {/* <Text style={styles.Notification}>2</Text> */}
            </TouchableOpacity>
          </View>


          <View style={styles.Input_Contenier}>
            <Image style={defaultStyles.Search} source={BGImages.SEARCH} />
            <TextInput style={styles.Input} placeholder={All_Text.Search_here} placeholderTextColor={COLORS.Gray} />
          </View>

        </View>

      </ImageBackground>


      <ScrollView contentContainerStyle={styles.Scroll_Style} >

        <Text style={[defaultStyles.Category, { paddingHorizontal: scale(10) }]}>{All_Text.Shop_by_Brand}</Text>

        <FlatList
          data={data}
          renderItem={Shop_Brand}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={[defaultStyles.Category, { marginTop: scale(15), paddingHorizontal: scale(10) }]}>{All_Text.Shop_by_Category}</Text>
        <FlatList
          data={data}
          renderItem={Shop_Category}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.Swiper}>
          <Swiper style={styles.wrapper} autoplay dot={<View style={{ backgroundColor: COLORS.DOT, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -20, }} />}
            activeDot={<View style={{ backgroundColor: COLORS.Paret, width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: -20, }} />}
          >
            <View>
              <ImageBackground style={[defaultStyles.Video]} source={BGImages.VIDEO}>
                <>

                  <View style={styles.HAIER_Contenier}>
                    <Image style={styles.Haier} source={BGImages.HAIER} />
                    <View style={styles.Clock_Conteier}>
                      <Image style={styles.clock} source={BGImages.CLOCK} />
                      <Text style={styles.Time}>01:20:15</Text>
                    </View>

                  </View>
                  <TouchableOpacity style={styles.B_BUTTON}>
                    <Image style={styles.B_Logo} source={BGImages.B} />
                    <Text style={styles.Bid_Now}>{All_Text.Bid_Now}</Text>
                  </TouchableOpacity>
                </>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground style={[defaultStyles.Video]} source={BGImages.VIDEO}>
                <>

                  <View style={styles.HAIER_Contenier}>
                    <Image style={styles.Haier} source={BGImages.HAIER} />
                    <View style={styles.Clock_Conteier}>
                      <Image style={styles.clock} source={BGImages.CLOCK} />
                      <Text style={styles.Time}>01:20:15</Text>
                    </View>

                  </View>
                  <TouchableOpacity style={styles.B_BUTTON}>
                    <Image style={styles.B_Logo} source={BGImages.B} />
                    <Text style={styles.Bid_Now}>{All_Text.Bid_Now}</Text>
                  </TouchableOpacity>
                </>
              </ImageBackground>
            </View>

            <View>
              <ImageBackground style={[defaultStyles.Video]} source={BGImages.VIDEO}>
                <>

                  <View style={styles.HAIER_Contenier}>
                    <Image style={styles.Haier} source={BGImages.HAIER} />
                    <View style={styles.Clock_Conteier}>
                      <Image style={styles.clock} source={BGImages.CLOCK} />
                      <Text style={styles.Time}>01:20:15</Text>
                    </View>

                  </View>
                  <TouchableOpacity style={styles.B_BUTTON}>
                    <Image style={styles.B_Logo} source={BGImages.B} />
                    <Text style={styles.Bid_Now}>{All_Text.Bid_Now}</Text>
                  </TouchableOpacity>
                </>
              </ImageBackground>
            </View>

          </Swiper>
        </View>

        <View style={styles.See_All_Contenier}>
          <View style={styles.Featured_Items_Contenier}>
            <Text style={defaultStyles.Category}>{All_Text.Featured_Items}</Text>
            <Text onPress={()=>{NavigationService.navigate(routes.SEEALLITEMS)}} style={styles.See_All}>{All_Text.See_All}</Text>
          </View>
          <FlatList
            data={mobiles}
            renderItem={mobilesData}
            numColumns={2}

          />

        </View>

      </ScrollView >
    </SafeAreaView >
  )
}

export default Home

const styles = ScaledSheet.create({
  Scroll_Style: {
    paddingBottom: '40@s'
  },
  Header_Bg: {
    height: '172@vs',
    justifyContent: 'center',

  },

  header_Contenier: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  Profile: {
    width: '50@s',
    height: '50@vs',
    resizeMode: 'contain'
  },
  Hello: {
    fontSize: FONT_SIZE.text14,
    color: COLORS.White
  },
  Name: {
    fontSize: FONT_SIZE.text18,
    color: COLORS.White
  },
  Main_Contenier_Header: {
    paddingHorizontal: '10@s'
  },

  Notification: {
    width: '15@s',
    height: '15@vs',
    backgroundColor: 'red',
    borderRadius: '8@s',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: FONT_SIZE.text12,
    color: COLORS.White, position: 'absolute',
    right: '2@s',
    top: '5@s'
  },
  Input_Contenier: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '48@vs',
    top: '30@s',
    backgroundColor: COLORS.White,
    borderRadius: '5@s',
    paddingHorizontal: '15@s'
  },
  Input: {
    fontSize: FONT_SIZE.text14,
    color: COLORS.Gray,
    flex: 1,
    marginLeft: '8@s'
  },
  List_Contenier: {
    // margin: 10,
    alignItems: 'center',
    paddingHorizontal: '10@s',
    
  },
  Cameras: {
    fontSize: FONT_SIZE.text13,
    color: COLORS.Black,
    marginTop: '5@s'
  },
  wrapper: {
    width: '100%',
    height: '191@vs',
  },
  Swiper: {
    marginTop: '20@s',
  },
  HAIER_Contenier: {
    marginHorizontal: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15@s',
  },
  Haier: {
    width: '62@s',
    height: '19@vs',
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
  B_BUTTON: {
    width: '99@s',
    height: '36@vs',
    backgroundColor: COLORS.Paret,
    borderRadius: '6@s',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '10@s',
    right: '8@s'
  },
  B_Logo: {
    width: '12@s',
    height: '16@vs',
    resizeMode: 'contain'
  },
  Bid_Now: {
    fontSize: FONT_SIZE.text14,
    color: COLORS.White,
    left: '5@s'
  },
  See_All_Contenier: {
    paddingHorizontal: '10@s',
    marginTop: '10@s',
  },
  Featured_Items_Contenier: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  See_All: {
    fontSize: FONT_SIZE.text16,
    color: COLORS.Paret,
    textDecorationLine: 'underline'
  },
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

})