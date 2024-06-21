import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../asstes/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTab from './BottomTab'

const Dashboard = () => {
  return (
<SafeAreaView style={[defaultStyles.Contenier]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({})