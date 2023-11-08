'use client'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useGlobalContext } from '@/contexts'
import { playerType } from '@/lib/types'
import { playerCounts } from '@/lib/utils'
import { Flag } from 'lucide-react'
import React, { useState } from 'react'

const SelectPlayers = () => {
  const { gameStatus, setGameStatus } = useGlobalContext();

  const [players, setPlayers] = useState<playerType[]>([
    {
      id: 1,
      activePosition: 0,
    },
    {
      id: 2,
      activePosition: 0,
    }
  ])


  const handleSelect = (e: string) => {
    const count = +e;

    const newPlayer: playerType = {
      id: 1,
      activePosition: 0,
    }

    const newPlayers = Array(count).fill(newPlayer);
    const updatePlayers = newPlayers.map((ele: playerType, idx) => {
      const newId = idx + 1

      return { ...ele, id: newId }
    })

    setPlayers(updatePlayers)

  }

  const handleStart = () => {
    setGameStatus(!gameStatus)
  }


  return (
    <section className='player-sec game-arena-sec'>
      <section className='w-[100%] gap-2'>
        <h1 className='text-xl font-bold'>Select Number of players</h1>
        <Select onValueChange={(e) => { handleSelect(e) }}>
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="Number of Players" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Number of Players</SelectLabel>
              {
                playerCounts.map((val, key) => (
                  <SelectItem
                    value={`${val}`}
                    key={key + 2}
                  >
                    {val}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>

      <section className='player-flags'>
        {
          players.map((p, i) => {
            return (

              <span
                className={`player-id-${p.id}`}
                key={i}
              >
                <Flag />
              </span>

            )
          })
        }
      </section>
      <section>
        <Button onClick={handleStart}>Start Game</Button>
      </section>
    </section>
  )
}

export default SelectPlayers
