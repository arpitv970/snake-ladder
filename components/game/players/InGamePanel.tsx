'use client'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '@/contexts'
import { playGame } from '@/lib/game-logic'
import React from 'react'
const InGamePanel = () => {
  const { diceRes, setDiceRes, players } = useGlobalContext();


  const handleDice = async () => {

    // get random number
    let randomNumber: number = 0
    randomNumber = Math.floor(Math.random() * 6) + 1;


    // play the game
    let activePlayer = await players.find((p) => p.acitve === true)
    if (activePlayer) {
      let gotoTile = playGame(activePlayer.activePosition, randomNumber)
      console.log('goto', gotoTile)
      players.forEach((p, i, arr) => {
        if (p.id === activePlayer?.id) {
          p.activePosition = gotoTile;
          p.acitve = false;
          arr[(p.id % players.length)].acitve = true
        }
      })
    }

    setDiceRes(randomNumber)
  }

  return (
    <section className='player-sec game-arena-sec'>
      <section className='flex flex-col gap-3 justify-center items-center mx-auto'>
        <div className='text-xl'>{diceRes}</div>
        <Button onClick={handleDice}>Roll the Dice</Button>
      </section>
      <section>
      </section>
    </section>
  )
}

export default InGamePanel
