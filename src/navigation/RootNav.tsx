import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationState, NavigationContainer } from '@react-navigation/native'

import { RootStackParams, getNavigationRef } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import { SUser } from '@src/store/selector'
import { UserInfo, Proficiency } from '@src/screens'
import MainTabNav from './MainTabNav'

const Stack = createStackNavigator<RootStackParams>()

const RootNav: FC = () => {
  const proficiency = useAppSelector(SUser.proficiency)

  const _onStateChange = (state: NavigationState | undefined) => {
    //console.debug('navigation state -> ', state?.routeNames, state?.index)
  }

  return (
    <NavigationContainer
      ref={getNavigationRef()}
      onStateChange={_onStateChange}>
      <Stack.Navigator
        initialRouteName={
          proficiency === 'Undefined' ? 'Proficiency' : 'MainTab'
        }
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Proficiency'} component={Proficiency} />
        <Stack.Screen name={'UserInfo'} component={UserInfo} />
        <Stack.Screen name={'MainTab'} component={MainTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNav
