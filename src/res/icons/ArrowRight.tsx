import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ArrowRight({ color, ...props }: SvgProps) {
  return (
    <Svg
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={color || '#000000'}>
      <Path d="M10 17l5-5-5-5v10z" />
      <Path d="M0 24V0h24v24H0z" fill="none" />
    </Svg>
  )
}
