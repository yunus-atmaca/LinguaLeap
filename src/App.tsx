import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {}, [])

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}

export default App
