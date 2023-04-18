import { STYLES } from '@src/res'
import { moderateScale } from 'react-native-size-matters'

export interface IIndex {
  f: number
  s: number
}

export interface IWordIndexes {
  word: string
  indexes: IIndex[]
}

const createPuzzle = (words: string[], puzzleSize: number) => {
  const size = puzzleSize // Size of the puzzle board
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] // directions
  const letters = 'abcdefghijklmnopqrstuvwxyz' // Possible letters

  // Create an empty puzzle board
  const board: string[][] = []
  for (let i = 0; i < size; i++) {
    board[i] = new Array(size).fill('')
  }

  // Create an empty object to store the letter indexes
  const indexes: any = {}

  // Add words to the board
  for (const word of words) {
    let added = false
    while (!added) {
      const startX = Math.floor(Math.random() * size) // Random starting X position
      const startY = Math.floor(Math.random() * size) // Random starting Y position
      const direction =
        directions[Math.floor(Math.random() * directions.length)] // Random direction

      let canAdd = true
      const indexesArray = []
      for (let i = 0; i < word.length; i++) {
        const x = startX + direction[0] * i
        const y = startY + direction[1] * i
        if (
          x < 0 ||
          x >= size ||
          y < 0 ||
          y >= size ||
          (board[x][y] !== '' && board[x][y] !== word[i])
        ) {
          canAdd = false
          break
        }
        indexesArray.push([x, y])
      }

      if (canAdd) {
        for (let i = 0; i < word.length; i++) {
          const x = startX + direction[0] * i
          const y = startY + direction[1] * i
          board[x][y] = word[i]
        }
        added = true
        indexes[word] = indexesArray
      }
    }
  }

  // Fill remaining spaces with random letters
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === '') {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)]
        board[i][j] = randomLetter
      }
    }
  }

  // Print the puzzle and the letter indexes in the console
  //console.log('Puzzle:\n' + board.map(row => row.join(' ')).join('\n'))
  //console.log('Letter indexes:')

  let wordPositions: IWordIndexes[] = []

  for (const word in indexes) {
    let t: IWordIndexes = {
      word: word,
      indexes: [],
    }

    indexes[word].map((c: any) => {
      t.indexes.push({ f: c[0], s: c[1] })
    })

    /*console.log(
      word +
        ': ' +
        indexes[word]
          .map((coord: any) => '(' + coord[0] + ',' + coord[1] + ')')
          .join(', '),
    )*/

    wordPositions.push(t)
  }

  /*console.debug('board')
  console.debug(board)
  console.debug('Indexes')
  console.debug(wordPositions)*/

  return {
    board,
    wordPositions,
  }
}

export const ROW = 10
export const COLUMN = 10
export const cellSize = Math.floor((STYLES.W_WIDTH - moderateScale(24)) / ROW)

export { createPuzzle }
