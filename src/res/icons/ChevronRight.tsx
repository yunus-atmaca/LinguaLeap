import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ChevronRight({ color, ...props }: SvgProps) {
  return (
    <Svg
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={color || '#000000'}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </Svg>
  )
}
