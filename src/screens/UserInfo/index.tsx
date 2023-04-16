import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'
import { RootScreenPropsCreator } from '@src/types/navigation'
import { LLText } from '@src/components'

const UserInfo: FC<RootScreenPropsCreator<'UserInfo'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LLText style={styles.title} font={'TTBlack'}>
        Test title
      </LLText>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
  },
})

export default UserInfo
