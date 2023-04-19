import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LLText } from '@src/components'
import { COLORS } from '@src/res'

const Overview: FC = () => {
  return (
    <View style={styles.container}>
      <LLText style={styles.title} font={'TTBlack'}>
        Overview
      </LLText>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {},
  title: {
    marginStart: '10@ms',
    color: COLORS.black,
    fontSize: 18,
  },
})

export default Overview
