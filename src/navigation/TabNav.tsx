import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '@src/components'
import { Home, Profile } from '@src/screens'

const Tab = createBottomTabNavigator()

const TabNav: FC = () => {
  return (
    <Tab.Navigator
      tabBar={p => <TabBar {...p} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  )
}

export default TabNav
