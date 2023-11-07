import { boardTile } from '@/lib/types'
import React from 'react'

const Tile = (props: boardTile) => {
  const { id, type } = props;
  return (
    <span className={`${id % 2 === 0 ? 'dark-tile' : 'light-tile'} tile`}>{id}</span>
  )
}

export default Tile
