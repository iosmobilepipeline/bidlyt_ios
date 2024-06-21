import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '../../asstes/styles'
import BottomTab from './BottomTab'
import NavigationService from '../../routes/NavigationService'
import { routes } from '../../routes/routes'

const Auction = () => {
  return (
    <SafeAreaView style={[defaultStyles.Contenier]}>
    <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
<Text>Auction</Text>

</SafeAreaView>
  )
}

export default Auction

const styles = StyleSheet.create({})