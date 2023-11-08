'use client'
import React from 'react'
import Players from '../game/players/Players'
import Board from '../game/board/Board'
import { useGlobalContext } from '@/contexts'
import Winner from '../game/players/Winner'

const HomePage = () => {
  const { players } = useGlobalContext();
  const winner = players.find(p => p.activePosition === -1)
  return (
    winner
      ? <Winner pId={winner.id} />
      : (

        <section className='game-arena'>
          <Players />
          <Board />
        </section>
      )
  )
}

export default HomePage
