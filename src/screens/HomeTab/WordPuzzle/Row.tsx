import React, { FC, useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'
import Cell from './Cell'

type Props = {
  letters: string[]
  onRef: (ref: any) => void
}

const Row: FC<Props> = ({ letters, onRef }) => {
  useEffect(() => {
    onRef({ update: update })
  }, [])

  const update = () => {}

  const cell = useCallback((l: string, i: number) => {
    return <Cell key={'c-' + i} letter={l} />
  }, [])

  return (
    <View style={styles.container}>
      {letters.map((c, i) => {
        return cell(c, i)
      })}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    fontSize: 12,
    color: COLORS.black,
  },
})

export default Row
