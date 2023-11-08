import React from 'react'
import PlayerBlock from './PlayerBlock'

const Winner = ({ pId }: { pId: number }) => {
  return (
    <section className='game-arena-sec winner-sec'>
      <PlayerBlock pId={pId} />
    </section>
  )
}

export default Winner
