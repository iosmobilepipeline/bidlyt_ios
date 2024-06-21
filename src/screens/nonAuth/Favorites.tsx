import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '../../asstes/styles'
import BottomTab from './BottomTab'

const Favorites = () => {
  return (
    <SafeAreaView style={[defaultStyles.Contenier]}>
    <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
<Text>Favorites</Text>
</SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({})