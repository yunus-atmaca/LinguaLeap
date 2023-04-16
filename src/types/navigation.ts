import type { StackScreenProps } from '@react-navigation/stack'
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { createNavigationContainerRef } from '@react-navigation/native'
import { NavigationContainerRefWithCurrent } from '@react-navigation/core'

export type RootStackParams = {
  UserInfo: undefined
  Proficiency: undefined
  MainTab: NavigatorScreenParams<MainTabParams>
}

export type MainTabParams = {
  HomeNav: HomeTParams
  ProfileNav: ProfileTParams
}

/*export type RootParamList = {
  HomeNav: HomeParamList
  ProfileNav: ProfileParamList
}*/

export type HomeTParams = {
  Home: undefined
  Games: undefined
}

export type ProfileTParams = {
  Profile: undefined
  Settings: undefined
}

export type RootScreenPropsCreator<K extends keyof RootStackParams> =
  StackScreenProps<RootStackParams, K>

//export type   RootScreen  = CompositeScreenProps<

/*  export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  HomeStackScreenProps<keyof HomeStackParamList>,
  BottomTabScreenProps<TabParamList, T>,
  
>;*/

/*type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Profile'>,
  StackScreenProps<StackParamList>
>;*/

/*export type ScreenPropsCreator<
  K extends keyof RootParamList,
  T extends keyof RootParamList[K],
> = CompositeScreenProps<
  BottomTabScreenProps<RootParamList, K>,
  StackScreenProps<RootParamList[K], T>
>*/

export const _navRef = createNavigationContainerRef<RootStackParams>()
export const getNavigationRef =
  (): NavigationContainerRefWithCurrent<RootStackParams> => {
    return _navRef
  }
