import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { RootRoutes } from '@src/types/navigation'
//import { TabBar } from '@src/components'

const Tab = createBottomTabNavigator<RootRoutes>()

import ProfileStackNav from './ProfileStackNav'
import HomeStackNav from './HomeStackNav'

const RootNav: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //tabBar={p => <TabBar {...p} />}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name={'HomeTab'} component={HomeStackNav} />
        <Tab.Screen name={'ProfileTab'} component={ProfileStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNav
