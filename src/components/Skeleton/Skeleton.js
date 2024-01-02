import React from 'react'
import './Skeleton.css'

export const Skeleton = ({width , height, varient}) => {
  const style={
    width,
    height,
  }
  return (
    <span className={`Skeleton ${varient}`} style={style}>Skeleton</span>
  )
}
