import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { tabBarHeight } from '@src/utils'
import { COLORS } from '@src/res'

type Props = {} & ViewProps

const PageContainer: FC<Props> = props => {
  return <View {...props} style={[styles.container, props.style]} />
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingBottom: tabBarHeight,
    backgroundColor: COLORS.white,
  },
})

export default PageContainer
