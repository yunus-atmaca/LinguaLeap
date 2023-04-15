import React, { FC } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeStack } from '@src/types/navigation'

const Stack = createStackNavigator<HomeStack>()

import { Home, Games } from '@src/screens'

const HomeStackNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Games'} component={Games} />
    </Stack.Navigator>
  )
}

export default HomeStackNav
