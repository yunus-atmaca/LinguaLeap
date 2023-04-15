import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

const TabBar: FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const label = route.name
          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true } as any)
            }
          }
          return (
            <TouchableOpacity style={styles.icon} key={label} onPress={onPress}>
              <Text>{label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  main: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '64@ms',
    paddingHorizontal: '16@ms',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '48@ms',
    borderWidth: 2,
    borderColor: COLORS.black,
    width: '100%',
    borderRadius: 100,
    paddingHorizontal: '24@ms',
  },
  user: {
    width: '20@ms',
    height: '20@ms',
    borderRadius: 100,
    borderColor: COLORS.black,
    borderWidth: 0.5,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabBar
