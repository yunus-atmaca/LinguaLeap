import React, { FC } from 'react'
import {
  Image,
  TouchableOpacity,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

import { ProficiencyLevel } from '@src/types/app'
import { LLText } from '@src/components'
import { STYLES, ALFA, COLORS } from '@src/res'
import { getNavigationRef } from '@src/types/navigation'

type Props = {
  name: ProficiencyLevel
  containerStyle?: StyleProp<ViewStyle>
  contentStyle?: StyleProp<ViewStyle>
}

const description = {
  Beginner: `You know just a few words and you can construct simple sentences.`,
  Elementary: `You have a small stock of vocabulary, communication skills, and grammatical structures.`,
  Intermediate: `You understand English in basic situations, but you are restricted in expressing your own thoughts. You have fair knowledge of English necessary to communicate in everyday life.`,
  Advance: `You use English in a wide range of situations. you construct complex English sentences using advanced grammar rules, such as conditionals, passive voice, and modal verbs.`,
  Undefined: '',
}

const Level: FC<Props> = ({ containerStyle, contentStyle, name }) => {
  const onClick = () => {
    getNavigationRef().navigate('MainStackNav')
  }

  const getBackgroundColor = () => {
    let c = `${COLORS.lGreen}${ALFA.p20}`
    switch (name) {
      case 'Elementary':
        c = `${COLORS.lBlue}${ALFA.p20}`
        break
      case 'Intermediate':
        c = `${COLORS.blue}${ALFA.p20}`
        break
      case 'Advance':
        c = `${COLORS.red}${ALFA.p20}`
        break

      default:
        break
    }

    return c
  }

  const getIcon = () => {
    let i = require('../../../assets/images/beginner.png')
    switch (name) {
      case 'Elementary':
        i = require('../../../assets/images/elementary.png')
        break
      case 'Intermediate':
        i = require('../../../assets/images/intermediate.png')
        break
      case 'Advance':
        i = require('../../../assets/images/advance.png')
        break

      default:
        break
    }

    return i
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.5}
        style={[
          styles.content,
          contentStyle,
          { backgroundColor: getBackgroundColor() },
        ]}>
        <View style={styles.iContainer}>
          <Image style={styles.icon} source={getIcon()} />
        </View>
        <LLText style={styles.name} font={'TTBlack'}>
          {name}
        </LLText>
        <LLText style={styles.description} font={'RRegular'}>
          {description[name]}
        </LLText>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '16@ms',
  },
  content: {
    width: '100%',
    paddingHorizontal: '12@ms',
    paddingVertical: '16@ms',
    borderRadius: '16@ms',
    borderWidth: 2,
    borderColor: COLORS.black,
  },
  name: {
    fontSize: 14,
    marginBottom: '10@ms',
  },
  description: {
    fontSize: 11,
    color: COLORS.grey3,
    maxWidth: STYLES.S_WIDTH - moderateScale(32 + 24 + 72),
  },
  iContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    width: '100@ms',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '48@ms',
    height: '48@ms',
  },
})

export default Level
