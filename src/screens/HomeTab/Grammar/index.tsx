import React, { FC } from 'react'
import {} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import PagerView from 'react-native-pager-view'

import { PageContainer, LLHeader } from '@src/components'
import { COLORS } from '@src/res'

import Overview from './Overview'
import Titles from './Titles'

const Grammar: FC = () => {
  return (
    <PageContainer style={styles.container}>
      <LLHeader title="Grammar" />
      <PagerView style={styles.pagerView} initialPage={0}>
        <Overview />
        <Titles />
      </PagerView>
    </PageContainer>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 0,
  },
  pagerView: {
    flex: 1,
  },
})

export default Grammar
