import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import PagerView from 'react-native-pager-view'

import { COLORS } from '@src/res'
import { PageContainer } from '@src/components'

const Games: FC = () => {
  return (
    <PageContainer style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
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
    backgroundColor: 'red',
  },
})

export default Games
