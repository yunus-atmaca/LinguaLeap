import React, { FC, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { runOnJS } from 'react-native-reanimated'

import { PageContainer, LLText } from '@src/components'
import { COLORS } from '@src/res'

import { IWordIndexes, createPuzzle, ROW, cellSize } from './helper'
import Row from './Row'
import Line from './Line'
import { useAppDispatch } from '@src/types/store'
import { addFPositions } from '@src/store/controllers/game'

const WordPuzzle: FC = () => {
  const dispatch = useAppDispatch()

  const prev = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const rowRef = useRef<any>({})
  const lineRef = useRef<any>()

  const [puzzle, setPuzzle] = useState<{
    board: string[][]
    wordPositions: IWordIndexes[]
  }>()

  useEffect(() => {
    if (!puzzle) {
      const p = createPuzzle(
        ['ears', 'hair', 'shoulder', 'tongue', 'bones', 'hand', 'finger'],
        ROW,
      )

      //console.debug('puzzle --> ', p)

      //console.debug('word: ', p.wordPositions)
      /*for (let i = 0; i < p.wordPositions.length; ++i) {
        //console.debug('word: ', p.wordPositions[i].word)
        const len = p.wordPositions[i].indexes.length
        for (let j = 0; j < len; ++j) {
          const index = p.wordPositions[i].indexes[j]
          //console.debug('word: ', index.f + '|' + index.s + ' ')
        }
      }*/
      setPuzzle(p)
    }
  }, [])

  const drawDot = (x: number, y: number) => {
    lineRef.current?.update(Math.floor(x), Math.floor(y))
  }

  const panGesture = Gesture.Pan()
    .onStart(e => {
      const { absoluteX, absoluteY } = e
      //runOnJS(updatePos)(absoluteX, absoluteY, 'start')
    })
    .onUpdate(e => {
      const { absoluteX, absoluteY } = e
      //updatePos(absoluteX, absoluteY, 'update')
      runOnJS(updatePos)(absoluteX, absoluteY, 'update')
    })
    .onEnd(e => {
      const { absoluteX, absoluteY } = e
      //runOnJS(updatePos)(absoluteX, absoluteY, 'end')
    })

  const updatePos = (
    pX: number,
    pY: number,
    pan: 'end' | 'update' | 'start',
  ) => {
    const { x, y } = prev.current
    if (x === pX && y === pY) {
      return
    }

    dispatch(addFPositions({ x: pX, y: pY, pan }))
  }

  return (
    <PageContainer style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <GestureDetector gesture={panGesture}>
          <View
            style={[
              styles.board,
              {
                height: cellSize * 10,
                width: cellSize * 10,
              },
            ]}>
            {puzzle?.board.map((r, i) => {
              return (
                <Row
                  onRef={ref => (rowRef.current[i] = ref)}
                  key={'r-' + i}
                  letters={r}
                />
              )
            })}
            {/*<Line onRef={r => (lineRef.current = r)} />*/}
          </View>
        </GestureDetector>
      </ScrollView>
    </PageContainer>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 0,
    paddingHorizontal: '12@ms',
    paddingTop: '24@ms',
    alignItems: 'center',
  },
  board: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: '5@ms',
  },
})

export default WordPuzzle
