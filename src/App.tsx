import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'

import RootNav from '@src/navigation/RootNav'
import Orientation from 'react-native-orientation-locker'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSession } from './hooks/app'
import { AppStatusBar } from '@src/components'

const App = () => {
  const session = useSession()

  useEffect(() => {
    if (session === 'LOADED') {
      SplashScreen.hide()
    }

    Orientation.lockToPortrait()
  }, [session])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppStatusBar />
      <SafeAreaProvider>
        <RootNav />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
