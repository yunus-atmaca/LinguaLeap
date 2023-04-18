import React, { FC } from 'react'
import { View, StatusBar } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { statusBarHeight } from '@src/utils'
import { COLORS } from '@src/res'

const AppStatusBar: FC = ({}) => {
  //return <StatusBar  translucent backgroundColor={COLORS.transparent} />
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={COLORS.blue} />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    height: statusBarHeight,
    width: '100%',
  },
})

export default AppStatusBar
