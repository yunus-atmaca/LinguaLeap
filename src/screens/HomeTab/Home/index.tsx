import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

//import { ScreenPropsCreator } from '@src/types/navigation'
import { PageContainer } from '@src/components'

import Section from './Section'

const Home: FC = () => {
  return (
    <PageContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section title="Games" />
        <Section containerStyle={styles.grammar} title="Grammar" />
      </ScrollView>
    </PageContainer>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingTop: '16@ms',
  },
  grammar: {
    marginTop: '16@ms',
  },
})

export default Home
