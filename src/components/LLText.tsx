import React, { FC, useCallback } from 'react'
import { TextProps, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type FONT =
  | 'OSBold'
  | 'OSHebrew'
  | 'OSLight'
  | 'OSLightItalic'
  | 'OSRegular'
  | 'OSSemiBoldItalic'
  | 'RBlack'
  | 'RThin'
  | 'RRegular'
  | 'TTBlackItalic'
  | 'TTBlack'
  | 'TTBold'
  | 'TTBoldItalic'

type Props = {
  font?: FONT
} & TextProps

const LLText: FC<Props> = ({ font, ...props }) => {
  const getFont = useCallback(() => {
    let f = 'Roboto-Regular'

    switch (font) {
      case 'RBlack':
        f = 'Roboto-Black'
        break
      case 'RThin':
        f = 'Roboto-Thin'
        break
      case 'TTBlack':
        f = 'TTBlack'
        break
      case 'TTBlackItalic':
        f = 'TTBlack-Italic'
        break
      case 'TTBold':
        f = 'TTBold'
        break
      case 'TTBold':
        f = 'TTBold-Italic'
        break
      case 'OSBold':
        f = 'OpenSans-Bold'
        break
      case 'OSHebrew':
        f = 'OpenSans-HebrewCondensed'
        break
      case 'OSLight':
        f = 'OpenSans-Light'
        break
      case 'OSLightItalic':
        f = 'OpenSans-LightItalic'
        break
      case 'OSRegular':
        f = 'OpenSans-Regular'
        break
      case 'OSSemiBoldItalic':
        f = 'OpenSans-SemiBoldItalic'
        break

      default:
        break
    }

    return f
  }, [font])

  return (
    <Text
      {...props}
      style={[styles.main, props.style, { fontFamily: getFont() }]}
    />
  )
}

const styles = ScaledSheet.create({
  main: {
    color: 'black',
    fontSize: 14,
  },
})

export default LLText
