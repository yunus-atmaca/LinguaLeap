import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationState, NavigationContainer } from '@react-navigation/native'

import { RootParamList, getNavigationRef } from '@src/types/navigation'
import { TabBar } from '@src/components'

const Tab = createBottomTabNavigator<RootParamList>()

import ProfileStackNav from './ProfileStackNav'
import HomeStackNav from './HomeStackNav'

const RootNav: FC = () => {
  const _onStateChange = (state: NavigationState | undefined) => {
    //console.debug('navigation state -> ', state?.routeNames, state?.index)
  }

  return (
    <NavigationContainer
      ref={getNavigationRef()}
      onStateChange={_onStateChange}>
      <Tab.Navigator
        tabBar={p => <TabBar {...p} />}
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name={'HomeNav'} component={HomeStackNav} />
        <Tab.Screen name={'ProfileNav'} component={ProfileStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNav
