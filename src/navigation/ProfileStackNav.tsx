import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ProfileStack } from '@src/types/navigation'

const Stack = createStackNavigator<ProfileStack>()

import { Settings, Profile } from '@src/screens'

const ProfileStackNav: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'Settings'} component={Settings} />
    </Stack.Navigator>
  )
}

export default ProfileStackNav
