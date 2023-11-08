import React from 'react'
import PlayerBlock from './PlayerBlock'

const Winner = ({ pId }: { pId: number }) => {
  return (
    <section className='game-arena-sec winner-sec'>
      <h1>Winner of the Game is:</h1>
      <PlayerBlock pId={pId} />
    </section>
  )
}

export default Winner
