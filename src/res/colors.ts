export const ALFA = {
  p10: '1A',
  p20: '33',
  p25: '40',
  p30: '4D',
  p40: '66',
  p50: '80',
  p60: '99',
  p70: 'B3',
  p75: 'BF',
  p80: 'CC',
  p90: 'E6',
}

export const COLORS = {
  black: '#030505',
  lGreen: '#2ae646',
  dGreen: '#009368',
  ddGreen: '#00626f',
  dddGreen: '#005b60',
  green: '#008e52',
  white: '#f9fdf7',
  lBlue: '#6eedf3',
  llBlue: '#a5f2f0',
  dBlue: '#016fca',
  blue: '#0091cc',
  red: '#fa4026',
  grey: 'grey',
  grey1: '#DFDFDF',
  grey2: '#FAFAFA',
  grey3: '#707070',
  grey4: '#B8B8B8',
  grey5: '#E2E2E2',
  grey6: '#969696',
  grey7: '#6B6B6B',
  grey8: '#212121',
}

export const randomColor = () => {
  const c = [
    '#2ae646',
    '#009368',
    '#005b60',
    '#fa4026',
    '#6eedf3',
    '#016fca',
    '#0091cc',
  ]

  return c[Math.floor(Math.random() * c.length)]
}

//random color with random alpha
export const RCWithRA = () => {
  const rc = randomColor()

  const a = ['1A', '33', '40', '4D', '66']
  const ra = a[Math.floor(Math.random() * a.length)]

  return `${rc}${ra}`
}
