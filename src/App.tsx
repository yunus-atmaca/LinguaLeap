import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'

import RootNav from '@src/navigation/RootNav'

const App = () => {
  useEffect(() => {}, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default App
