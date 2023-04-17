import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationState, NavigationContainer } from '@react-navigation/native'

import { getNavigationRef } from '@src/types/navigation'
import { useAppSelector } from '@src/types/store'
import { SUser } from '@src/store/selector'
import { Proficiency } from '@src/screens'
import MainStackNav from './MainStackNav'

const Stack = createStackNavigator()

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
          proficiency === 'Undefined' ? 'Proficiency' : 'MainStackNav'
        }
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'MainStackNav'} component={MainStackNav} />
        <Stack.Screen name={'Proficiency'} component={Proficiency} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNav
