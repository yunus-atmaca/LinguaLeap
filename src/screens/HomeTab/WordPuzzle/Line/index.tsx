import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {
  onRef: (ref: any) => void
}

import Dot from './Dot'

const Line: FC<Props> = ({ onRef }) => {
  const deleting = useRef(false)
  const interval = useRef<number>()

  const prevX = useRef(0)
  const prevY = useRef(0)
  const [dots, setDots] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    onRef({ update: update })

    const i = setInterval(clearDots, 80)

    return () => clearInterval(i)
  }, [])

  const clearDots = useCallback(() => {
    if (dots.length > 0) return

    //setDots(prev => prev.slice(1))
    setDots(prev => prev.slice(0, -1))
  }, [dots])

  const update = (tX: number, tY: number) => {
    if (prevX.current === tX && prevY.current === tY) {
      return
    }

    prevX.current = tX
    prevY.current = tY

    //console.debug('x -> ', tX, '  y -> ', tY)
    setDots(prev => prev.concat([{ x: tX, y: tY }]))
  }

  return (
    <View pointerEvents="none" style={styles.container}>
      {dots.map((d, i) => {
        const { x, y } = d
        return <Dot key={'d' + i} x={x} y={y} />
      })}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    //backgroundColor: 'green',
  },
})

export default Line
