import React, { FC } from 'react'
import { FlatList, FlatListProps, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import data from './data.json'
import { COLORS, Ic_ArrowRight, Ic_ChevronRight } from '@src/res'
import { LLText } from '@src/components'

interface ISub {
  name: string
  example: string
}

interface IVerb {
  title: string
  subtitles: ISub[]
}

type Props = {}

const Titles: FC<Props> = ({}) => {
  const renderVerb: FlatListProps<IVerb>['renderItem'] = ({ item }) => {
    return <Title t={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.verbs}
        renderItem={renderVerb}
        keyExtractor={(_, i) => 'v-' + i}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const Title: FC<{ t: IVerb }> = ({ t }) => {
  const renderSubTitle = (st: ISub, i: number) => {
    return (
      <View style={[styles.cSubtitle, { marginTop: i === 0 ? 0 : 10 }]}>
        <View key={'sub-' + i} style={styles.cName}>
          <LLText style={styles.name} font="OSBold">
            {st.name}
          </LLText>
          <Ic_ChevronRight color={COLORS.blue} />
        </View>
        <LLText style={styles.example} font={'RRegular'}>
          {st.example}
        </LLText>
      </View>
    )
  }

  return (
    <View style={styles.vContainer}>
      <View style={styles.cTitle}>
        <Ic_ArrowRight color={COLORS.blue} />
        <LLText style={styles.title} font="TTBlack">
          {t.title}
        </LLText>
      </View>
      <View>
        {t.subtitles.map((st, i) => {
          return renderSubTitle(st, i)
        })}
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '16@ms',
    //paddingVertical: '12@ms',
    //backgroundColor: 'red',
  },
  vContainer: {
    width: '100%',
    //backgroundColor: 'red',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.grey,
    paddingVertical: '12@ms',
  },
  cTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 16,
  },
  cSubtitle: {
    width: '100%',
  },
  cName: {
    paddingStart: '24@ms',
    //paddingEnd: '16@ms',
    height: '36@ms',
    //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    color: COLORS.grey8,
  },
  example: {
    fontSize: 12,
    color: COLORS.grey3,
    marginStart: '24@ms',
  },
})

export default Titles
