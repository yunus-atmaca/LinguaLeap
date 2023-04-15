import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

type Props = {}

const Section: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>VOCABULARY</Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '16@ms',
  },
  content: {
    borderWidth: 2,
    borderColor: COLORS.black,
    padding: '12@ms',
    borderRadius: '16@ms',
  },
  text: {
    //fontFamily: 'OpenSans-Bold',
    fontFamily:'Roboto-Black',
    //fontFamily:'TTBlack-Bold',
    //fontFamily:'TTBold-Bold',
    fontSize: 14,
    color: COLORS.black,
  },
})

export default Section
