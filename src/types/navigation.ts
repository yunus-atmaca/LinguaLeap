import type { StackScreenProps } from '@react-navigation/stack'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type StackParamList = {}

/*export type RootParamList = {
  HomeNav: NavigatorScreenParams<HomeParamList>
  ProfileNav: NavigatorScreenParams<ProfileParamList>
}*/

export type RootParamList = {
  HomeNav: HomeParamList
  ProfileNav: ProfileParamList
}

export type HomeParamList = {
  Home: undefined
  Games: undefined
}

export type ProfileParamList = {
  Profile: undefined
  Settings: undefined
}

export type ScreenPropsCreator<
  K extends keyof RootParamList,
  T extends keyof RootParamList[K],
> = CompositeScreenProps<
  BottomTabScreenProps<RootParamList, K>,
  StackScreenProps<RootParamList[K], T>
>

export const _navRef = createNavigationContainerRef<RootParamList>()
export const getNavigationRef =
  (): NavigationContainerRefWithCurrent<RootParamList> => {
    return _navRef
  }
