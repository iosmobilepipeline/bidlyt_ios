/* eslint-disable no-fallthrough */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { routes } from '../routes/routes';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { COLORS } from '../asstes/colors';
import { BGImages } from '../asstes';
import { defaultStyles } from '../asstes/styles';
import { All_Text } from '../utils/TextData';
import { verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';

const screenWidth = Dimensions.get('window').width;

export default function Tabicon({ label, isFocused }: any) {

  const TabIconView = ({ isFocuseds, islabel, isIcon, styleFloat }: any) => {
    return (
      <View style={defaultStyles.Icon_Contenier}>
        <Image
          source={isIcon}
          style={[defaultStyles.Bottom_Icon, styleFloat]}
        />
        <Text
          style={[defaultStyles.Icon_Text, { color: isFocuseds ? COLORS.Black : COLORS.Gray, }]}
        >{islabel}</Text>
        {/* {isFocuseds && <View style={styles.tabLine} />} */}
      </View>
    );
  };

  return (
    <View>
      {(() => {
        switch (label) {
          case routes.HOME:
            return (
              <TabIconView
                isFocuseds={isFocused}
                islabel={All_Text.HOME}
                isIcon={BGImages.HOME}
                styleFloat={{ tintColor: isFocused ? COLORS.Paret : COLORS.Gray }}
              />
            );
          case routes.AUCTION:
            return (
              <TabIconView
                isFocuseds={isFocused}
                islabel={All_Text.Auction}
                
                isIcon={BGImages.Auction}
                styleFloat={{ tintColor: isFocused ? COLORS.Paret : COLORS.Gray }}


              />
            );
          case routes.Float:
            return (
              <TabIconView
                isFocuseds={isFocused}
                styleFloat={[defaultStyles.Bottom_Icon_Float]}
                isIcon={BGImages.FLOAT}
              />
            );
          case routes.FAVORITES:
            return (
              <TabIconView
                isFocuseds={isFocused}
                islabel={All_Text.Favorites}
                isIcon={BGImages.Heart}
                styleFloat={{ tintColor: isFocused ? COLORS.Paret : COLORS.Gray }}


              />
            );
          case routes.DASHBOARD:
            return (
              <TabIconView
                isFocuseds={isFocused}
                islabel={All_Text.Dashboard}
                isIcon={BGImages.Dashboard}
                styleFloat={{ tintColor: isFocused ? COLORS.Paret : COLORS.Gray }}

              />
            );
        }
      })()}
    </View>
  );
}

const styles = ScaledSheet.create({
  textFix: {
    // fontFamily: FontStyle.fontMedium,
    fontSize: '10@s',
    color: COLORS.Primary,
    alignSelf: 'center',
    marginTop: '5@s',
  },
  centerTab: {
    flex: 1,
    width: screenWidth / 5,
  },
  tabIcon: {
    width: '24@s',
    height: '24@vs',
    resizeMode: 'contain',
    tintColor: COLORS.Gray,
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
  },
  tabLine: {
    width: screenWidth / 5,
    backgroundColor: COLORS.Primary,
    height: scale(2.5),
    borderRadius: scale(1),
    position: 'absolute',
  },
});
