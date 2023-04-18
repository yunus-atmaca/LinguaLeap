import React, { FC } from 'react'
import { Image, ImageSourcePropType, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { LLText, Button } from '@src/components'
import { COLORS } from '@src/res'
import { getNavigationRef } from '@src/types/navigation'

type Props = {
  index: number
  name: string
  image: ImageSourcePropType
  description: string
}

const Game: FC<Props> = ({ description, image, index, name }) => {
  const onGame = () => {
    let route = 'WordPuzzle'
    if (name === 'Crossword') route = 'Crossword'

    getNavigationRef().navigate(route)
  }

  return (
    <View style={styles.container} key={'key-' + index}>
      <Image style={styles.image} source={image} />
      <LLText style={styles.name} font="TTBlack">
        {name}
      </LLText>
      <LLText style={styles.description} font="RRegular">
        {description}
      </LLText>

      <Button
        buttonStyle={styles.button}
        containerStyle={styles.cButton}
        text={'Play'}
        onClick={onGame}
      />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '200@ms',
    height: '200@ms',
  },
  name: {
    fontSize: 18,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: '24@ms',
  },
  description: {
    fontSize: 12,
    color: COLORS.grey3,
    textAlign: 'center',
    marginHorizontal: '36@ms',
    marginTop: '8@ms',
  },
  button: {
    width: '200@ms',
  },
  cButton: {
    marginTop: '40@ms',
  },
})

export default Game
