import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import { Games, Settings, WordPuzzle, Grammar } from '@src/screens'
import TabNav from './TabNav'

const MainStackNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'TabNav'} component={TabNav} />
      <Stack.Screen name={'Games'} component={Games} />
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'WordPuzzle'} component={WordPuzzle} />
      <Stack.Screen name={'Grammar'} component={Grammar} />
    </Stack.Navigator>
  )
}

export default MainStackNav
