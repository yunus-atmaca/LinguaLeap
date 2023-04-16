import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

const UserInfo: FC = () => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})

export default UserInfo
