import React, { FC } from 'react'
import { TouchableOpacity, View, StyleProp, ViewStyle } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, RCWithRA } from '@src/res'
import LLText from './LLText'

type Props = {
  containerStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  text?: string
  onClick?: () => void
}

const Button: FC<Props> = ({
  text = 'Button',
  containerStyle,
  buttonStyle,
  onClick,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.6}
        style={[styles.content, { backgroundColor: RCWithRA() }, buttonStyle]}>
        <LLText font={'RBlack'} style={styles.text}>
          {text}
        </LLText>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '48@ms',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '16@ms',
  },
  content: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
    borderWidth: 2,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
})

export default Button
