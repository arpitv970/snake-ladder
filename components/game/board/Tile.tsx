import { boardTile } from '@/lib/types'
import React from 'react'

const Tile = (props: boardTile) => {
  const { id, type } = props;
  return (
    <span className={`${id % 2 === 0 ? 'dark-tile' : 'light-tile'} tile`}>
      {id}
      <span className={type === 'snake' ? 'text-red-500' : 'hidden'}>S</span>
      <span className={type === 'ladder' ? 'text-yellow-500' : 'hidden'}>L</span>
    </span>
  )
}

export default Tile
