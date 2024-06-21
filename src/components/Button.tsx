import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../asstes/styles'
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../asstes/colors';
import { FONT_SIZE } from '../asstes/Font';

const Button = (props: any) => {
  return (
    <View style={[defaultStyles.Contenier]}>

        <TouchableOpacity onPress={props.onPress} style={styles.Button_Contenier}>
        <Text style={styles.Button_Text}>{props.lable}</Text>
        </TouchableOpacity>
     
    </View>
  )
}

export default Button

const styles = ScaledSheet.create({
    Button_Contenier:{
        width:'100%',
        height:'48@vs',
        backgroundColor:COLORS.Paret,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'6@s',
      
    },
    Button_Text:{
        fontSize:FONT_SIZE.text16,
        color:COLORS.White
    }
})