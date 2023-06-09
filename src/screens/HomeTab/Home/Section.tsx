import React, { FC } from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'

import { ALFA, COLORS, STYLES } from '@src/res'
import { LLText } from '@src/components'
import { getNavigationRef } from '@src/types/navigation'

interface ISection {
  Games: string
  Grammar: string
}

type Props = {
  containerStyle?: StyleProp<ViewStyle>
  title: keyof ISection
}

const descriptions: ISection = {
  Games:
    'Learning English games are fun and effective tools for improving your language skills in an entertaining way.',
  Grammar:
    'Set of rules that explain how to use words and punctuation in English. Knowing grammar helps people communicate clearly and accurately.',
}

const Section: FC<Props> = ({ title, containerStyle }) => {
  const getBackgroundColor = () => {
    //Games
    let c = `${COLORS.blue}${ALFA.p30}`
    switch (title) {
      case 'Grammar':
        c = `${COLORS.lBlue}${ALFA.p30}`
        break
      default:
        break
    }

    return c
  }

  const getImage = () => {
    return title === 'Games'
      ? require('../../../../assets/images/games.png')
      : title === 'Grammar'
      ? require('../../../../assets/images/grammar.png')
      : null
  }

  const onClick = () => getNavigationRef().navigate(title)

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onClick}
        activeOpacity={0.6}
        style={styles.content}>
        <View style={[styles.cTop, { backgroundColor: getBackgroundColor() }]}>
          <View style={styles.iContainer}>
            <Image style={styles.image} source={getImage()} />
          </View>
          <LLText style={styles.title} font="TTBlack">
            {title}
          </LLText>
          <LLText style={styles.description} font="RRegular">
            {descriptions[title]}
          </LLText>
        </View>

        <View style={styles.cBottom}></View>
      </TouchableOpacity>
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
    borderRadius: '16@ms',
    overflow: 'hidden',
  },
  cTop: {
    width: '100%',
    padding: '12@ms',
  },
  cBottom: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
    padding: '12@ms',
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
  },
  description: {
    fontSize: 12,
    color: COLORS.grey3,
    width: STYLES.S_WIDTH - moderateScale(32 + 12 + 80),
  },
  iContainer: {
    position: 'absolute',
    width: '96@ms',
    right: 0,
    bottom: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  image: {
    width: '48@ms',
    height: '48@ms',
  },
})

export default Section
