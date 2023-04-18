import React, { FC, memo } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

type Props = {
  x: number
  y: number
}

const Dot: FC<Props> = ({ x, y }) => {
  return <View style={[styles.container, { left: x - 20, top: y - 20 }]} />
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLORS.red,
    width: 20,
    height: 20,
    borderRadius: 20,
  },
})

export default memo(Dot, () => true)
