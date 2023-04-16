import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainTabParams } from '@src/types/navigation'
import { TabBar } from '@src/components'

const Tab = createBottomTabNavigator<MainTabParams>()

import ProfileStackNav from './ProfileStackNav'
import HomeStackNav from './HomeStackNav'

const MainTabNav: FC = () => {
  return (
    <Tab.Navigator
      tabBar={p => <TabBar {...p} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'HomeNav'} component={HomeStackNav} />
      <Tab.Screen name={'ProfileNav'} component={ProfileStackNav} />
    </Tab.Navigator>
  )
}

export default MainTabNav
