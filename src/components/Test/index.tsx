import React, { FC } from 'react'
import { Text, View, FlatList, FlatListProps } from 'react-native'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import Animated, {
  SlideInRight,
  Layout,
  FadeInDown,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated'
import { RCWithRA } from '@src/res'

type Props = {}

interface IItem {
  id: number
  item: string
}

const list: IItem[] = [
  {
    id: 1,
    item: '01 : item1',
  },
  /*{
    id: 2,
    item: '02 : item2',
  },
  {
    id: 3,
    item: '03 : item3',
  },
  {
    id: 4,
    item: '04 : item4',
  },
  {
    id: 5,
    item: '05 : item5',
  },*/
]

const ITEM_HEIGHT = moderateScale(48)

const Collapsible: FC<Props> = () => {
  const _renderItem: FlatListProps<IItem>['renderItem'] = ({ item, index }) => {
    return <Item i={item} c={RCWithRA()} />
  }

  return (
    <FlatList<IItem>
      data={list}
      renderItem={_renderItem}
      keyExtractor={(i, _) => 'k-' + i.id}
    />
  )
}

const Item: FC<{ i: IItem; c: string }> = ({ i, c }) => {
  return (
    <Animated.View
      layout={Layout.springify()}
      entering={SlideInRight.delay(i.id * 100)}
      style={[styles.item, { backgroundColor: c }]}>
      <View
        style={{
          height: ITEM_HEIGHT,
          justifyContent: 'center',
          backgroundColor: 'green',
        }}>
        <Text style={styles.iText}>{i.item}</Text>
      </View>
      {
        <Animated.View
          style={styles.expand}
          layout={Layout.springify()}
          entering={FadeInDown}
          exiting={FadeOutUp}>
          <Text style={{ color: 'black' }}>
            The objective of the game is to find all the words in the grid by
            selecting them either horizontally, or vertically. The words can be
            arranged forwards or backward, and they may overlap with each other.
          </Text>
        </Animated.View>
      }
    </Animated.View>
  )
}

const styles = ScaledSheet.create({
  container: {},
  expand: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: ITEM_HEIGHT,
    backgroundColor: 'blue',
    height: '180@ms',
  },
  item: {
    width: '100%',
    height: ITEM_HEIGHT + moderateScale(180),
    paddingHorizontal: '16@ms',
    overflow: 'visible',
    //justifyContent: 'center',
  },
  iText: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'red',
  },
})

export default Collapsible
