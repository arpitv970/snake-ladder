'use client'
import { useGlobalContext } from '@/contexts';
import { boardTile } from '@/lib/types'
import React from 'react'
import PlayerBlock from '../players/PlayerBlock';

const Tile = (props: boardTile) => {
  const { id, type } = props;
  const { players } = useGlobalContext()

  const currPlayers = players.filter((p) => p.activePosition === id)
  return (
    <span className={`${id % 2 === 0 ? 'dark-tile' : 'light-tile'} tile`}>
      {id}
      <span className={type === 'snake' ? 'text-red-500' : 'hidden'}>S</span>
      <span className={type === 'ladder' ? 'text-yellow-500' : 'hidden'}>L</span>
      <div className='grid grid-cols-2'>
        {currPlayers.map((p, i) => (<PlayerBlock pId={p.id} key={i} />))}
      </div>
    </span>
  )
}

export default Tile
