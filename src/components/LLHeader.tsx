import React, { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { Ic_ArrowBack } from '@src/res'
import { COLORS, RCWithRA } from '@src/res'
import LLText from './LLText'
import { getNavigationRef } from '@src/types/navigation'

type Props = {
  title: string
}

const LLHeader: FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => getNavigationRef().goBack()}
        activeOpacity={0.7}
        style={styles.icon}>
        <Ic_ArrowBack />
      </TouchableOpacity>
      {/*<LLText style={styles.title} font={'OSBold'}>
        {title}
  </LLText>*/}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@ms',
    //backgroundColor: COLORS.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '16@ms',
  },
  icon: {
    width: '36@ms',
    height: '36@ms',
    backgroundColor: RCWithRA(),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  title: {
    marginStart: '10@ms',
    color: COLORS.black,
    fontSize: 18,
  },
})

export default LLHeader
