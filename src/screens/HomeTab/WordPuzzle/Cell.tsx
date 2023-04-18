import React, { FC, useEffect, useRef, useState } from 'react'
import { LayoutChangeEvent, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LLText } from '@src/components'
import { COLORS, RCWithRA } from '@src/res'

import { cellSize } from './helper'
import { useAppSelector } from '@src/types/store'
import { SGame } from '@src/store/selector'

type Props = {
  letter: string
}

const Cell: FC<Props> = ({ letter }) => {
  //const positions = useAppSelector(SGame.fingerPos)

  const [color, setColor] = useState('transparent')
  const layout = useRef<{
    width: number
    height: number
    pageY: number
    pageX: number
  }>()

  /*useEffect(() => {
    if (positions.length > 0) {
      if (!layout.current) return

      positions.forEach(p => {
        const { width, height, pageX, pageY } = layout.current!
        if (pageX >= p.x && pageX <= p.x + width) {
          if (pageY >= p.y && pageX <= p.y + height) {
            console.debug('here')
          }
        }
      })
    }
  }, [positions])*/

  const _onLayout = (e: LayoutChangeEvent) => {
    //const { x, y, height, width } = e.nativeEvent.layout
    //e.nativeEvent.target
    e.target.measure((x, y, width, height, pageX, pageY) => {
      //console.debug(`${letter} ->`, x, y, width, height, pageX, pageY)
      layout.current = { width, height, pageX, pageY }
    })

    //f -> 0 0 32.33333206176758 32.33333206176758 20 69
    //c -> 0 0 32.33333206176758 32.33333206176758 52 69

    /* e.nativeEvent.target?.measure(c => {
      console.debug(`${letter} -> `, c)
    })*/
    //console.debug(letter + '   ', x, y, height, width)
  }

  return (
    <View
      onLayout={_onLayout}
      style={[
        styles.container,
        {
          backgroundColor: color,
          width: cellSize,
          height: cellSize,
        },
      ]}>
      <LLText style={styles.letter}>{letter.toUpperCase()}</LLText>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 12,
    color: COLORS.black,
  },
})

export default Cell
