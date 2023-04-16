import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'
import { LLText } from '@src/components'
import Level from './Level'

const Proficiency: FC = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <LLText style={styles.title} font={'TTBlack'}>
          What is your proficiency?
        </LLText>
        <LLText style={styles.description} font={'RRegular'}>
          If you don't know, you can change it later. You can try any level.
        </LLText>

        <Level name="Beginner" containerStyle={styles.levelB} />
        <Level name="Elementary" containerStyle={styles.levelE} />
        <Level name="Intermediate" containerStyle={styles.levelE} />
        <Level name="Advance" containerStyle={styles.levelE} />
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 18,
    marginHorizontal: '16@ms',
  },
  description: {
    fontSize: 14,
    marginHorizontal: '16@ms',
  },
  scroll: {
    paddingTop: '16@ms',
    paddingBottom: '32@ms',
  },
  levelB: {
    marginTop: '32@ms',
  },
  levelE: {
    marginTop: '16@ms',
  },
})

export default Proficiency
