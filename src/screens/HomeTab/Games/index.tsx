import React, { FC } from 'react'
import { ImageBackground, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import PagerView from 'react-native-pager-view'

import { COLORS } from '@src/res'
import { PageContainer } from '@src/components'

import Game from './Game'

const games = ['Word Puzzle', 'Crossword']

const Games: FC = () => {
  const getGameProps = (name: string) => {
    //Word Puzzle
    let p = {
      image: require('../../../../assets/images/word.png'),
      description:
        'The objective of the game is to find all the words in the grid by selecting them either horizontally, or vertically. The words can be arranged forwards or backward, and they may overlap with each other.',
    }
    switch (name) {
      case 'Crossword':
        p = {
          image: require('../../../../assets/images/crossword.png'),
          description:
            'Game is a classic word puzzle game that challenges players to fill in the white squares of a grid with words based on given clues.',
        }
        break

      default:
        break
    }

    return p
  }

  return (
    <PageContainer style={styles.container}>
      <ImageBackground
        blurRadius={0.1}
        source={require('../../../../assets/images/gamesBackgroundBlur.png')}
        imageStyle={{ opacity: 0.5 }}
        style={styles.container}>
        <PagerView style={styles.pagerView} initialPage={0}>
          {games.map((g, i) => {
            const { image, description } = getGameProps(g)
            return (
              <Game
                description={description}
                image={image}
                key={'g-' + i}
                index={i}
                name={g}
              />
            )
          })}
        </PagerView>
      </ImageBackground>
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
    //backgroundColor: 'red',
  },
})

export default Games
