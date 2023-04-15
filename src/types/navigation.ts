import type { StackScreenProps } from '@react-navigation/stack'
import type { NavigationProp } from '@react-navigation/core'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type HomeStack = {
  Home: undefined
  Games: undefined
}

export type ProfileStack = {
  Profile: undefined
  Settings: undefined
}

export type RootRoutes = {
  HomeTab: HomeStack
  ProfileTab: ProfileStack
}

export type AllRoutes = RootRoutes
export type RouteProp = NavigationProp<AllRoutes>

//All routes screen props creator
export type ScreenPropsCreator<
  K extends keyof RootRoutes,
  T extends keyof RootRoutes[K],
> = CompositeScreenProps<
  BottomTabScreenProps<RootRoutes, K>,
  StackScreenProps<RootRoutes[K], T>
>

export const _navRef = createNavigationContainerRef<RootRoutes>()
export const getNavigationRef =
  (): NavigationContainerRefWithCurrent<RootRoutes> => {
    return _navRef
  }
