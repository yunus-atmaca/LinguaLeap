import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'
import { PortalProvider } from '@gorhom/portal'
import { Provider } from 'react-redux'

import RootNav from '@src/navigation/RootNav'
import Orientation from 'react-native-orientation-locker'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useSession } from './hooks/app'
import { AppStatusBar } from '@src/components'
import { store } from '@src/store'

const Root = () => {
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

const App = () => {
  return (
    <Provider store={store}>
      <PortalProvider>
        <Root />
      </PortalProvider>
    </Provider>
  )
}

export default App
