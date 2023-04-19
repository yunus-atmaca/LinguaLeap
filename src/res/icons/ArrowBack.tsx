import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ArrowBack({ color, ...props }: SvgProps) {
  return (
    <Svg
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={'#000000' || color}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </Svg>
  )
}
