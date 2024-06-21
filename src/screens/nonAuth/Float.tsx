

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
import BottomTab from './BottomTab';

const Float = () => {
  return (
    <SafeAreaView style={styles.Contenier}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle='dark-content' />
      <ScrollView contentContainerStyle={styles.Scroll_Style}>
<Text>Float</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Float

const styles = ScaledSheet.create({
  Scroll_Style: {
    paddingBottom: '40@s'
  },
  Contenier: { flex: 1,backgroundColor:'yellow' }
})