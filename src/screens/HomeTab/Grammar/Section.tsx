import React, { FC } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, Ic_ChevronRight } from '@src/res'
import { LLText } from '@src/components'

type Props = {
  title: string
  description: string
  containerStyle?: StyleProp<ViewStyle>
}

const Section: FC<Props> = ({ containerStyle, title, description }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.tContainer}>
        <View style={styles.dotBlue} />
        <LLText style={styles.title} font={'OSBold'}>
          {title}
        </LLText>
      </View>
      <View style={styles.cDescription}>
        <LLText style={styles.decs} font={'RRegular'}>
          {description}
        </LLText>

        <View style={styles.rButton}>
          <LLText style={styles.read} font={'RBlack'}>
            {'Show'}
          </LLText>
          <Ic_ChevronRight color={COLORS.blue} />
        </View>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    borderBottomColor: COLORS.grey3,
    borderBottomWidth: 0.5,
    paddingVertical: '8@ms',
  },
  tContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '12@ms',
    //backgroundColor:"green"
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
  },
  dotBlue: {
    width: '8@ms',
    height: '8@ms',
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    marginEnd: '16@ms',
  },
  cDescription: {
    paddingEnd: '16@ms',
    paddingStart: '36@ms',
    marginTop: '6@ms',
  },
  decs: {
    fontSize: 14,
    color: COLORS.grey,
  },
  rButton: {
    height: '36@ms',
    //backgroundColor: 'blue',
    width: '100%',
    marginTop: '12@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  read: {
    color: COLORS.blue,
    fontSize: 14,
  },
})

export default Section
