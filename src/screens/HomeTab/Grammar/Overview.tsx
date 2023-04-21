import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LLText, Collapsible } from '@src/components'
import { COLORS } from '@src/res'

import Section from './Section'

const Overview: FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <LLText style={styles.title} font={'TTBlack'}>
          Overview
        </LLText>

        <Section
          containerStyle={styles.cNouns}
          title="Nouns"
          description="People, places, or things. They tell us what we are talking about."
        />

        <Section
          containerStyle={styles.cVerbs}
          title="Verbs & Tenses"
          description="Past, present, future, possibilities and conditions. They tell us what is happening and when."
        />
      </ScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    //backgroundColor: 'red',
    paddingHorizontal: '16@ms',
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    marginTop: '16@ms',
  },
  cNouns: {
    marginTop: '32@ms',
  },
  cVerbs: {},
})

export default Overview
