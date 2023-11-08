'use client'
import { board, ladderPositions, snakePositions } from '@/lib/utils'
import React from 'react'
import Tile from './Tile'
import { useGlobalContext } from '@/contexts'
import PlayerBlock from '../players/PlayerBlock'

const Board = () => {
  const { players, setPlayers } = useGlobalContext();
  return (
    <section className='board-sec game-arena-sec'>
      <span>
        {
          players.map((p, i) => {
            if (p.activePosition === 0) return (
              <PlayerBlock pId={p.id} key={i} />
            )
          })
        }
      </span>
      <div className='board'>
        {
          board.map((row, idx) => (
            row.map((item: number, idx2: number) => {
              const snakeTile = snakePositions.find((snake) => {
                return snake['currentPosition'] === item + 1
              })

              const ladderTile = ladderPositions.find((ladder) => {
                return ladder['currentPosition'] === item + 1;
              })

              if (ladderTile?.currentPosition === item + 1) {
                return (
                  <Tile
                    id={item + 1}
                    type='ladder'
                    key={idx}
                  />)
              }

              else if (snakeTile?.currentPosition === item + 1) {
                return (
                  <Tile
                    id={item + 1}
                    type='snake'
                    key={idx}
                  />
                )
              }

              return (
                <Tile
                  id={item + 1}
                  type='neutral'
                  key={idx}
                />)
            }

            ))
          )
        }
      </div>
    </section>
  )
}

export default Board
