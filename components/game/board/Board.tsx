import { board } from '@/lib/utils'
import React from 'react'
import Tile from './Tile'

const Board = () => {

  return (
    <section className='board-sec game-arena-sec'>
      <div className='board'>
        {
          board.map((row, idx) => (
            row.map((item: number, idx2: number) => (

              <Tile
                id={item + 1}
                type='neutral'
                key={idx}
              />)
            ))
          )
        }
      </div>
    </section>
  )
}

export default Board
