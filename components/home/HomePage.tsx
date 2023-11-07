import React from 'react'
import Players from '../game/players/Players'
import Board from '../game/board/Board'

const HomePage = () => {
  return (
    <section className='game-arena'>
      <Players />
      <Board />
    </section>
  )
}

export default HomePage
