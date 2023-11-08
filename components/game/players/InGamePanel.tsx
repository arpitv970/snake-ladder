'use client'
import { Button } from '@/components/ui/button'
import { useGlobalContext } from '@/contexts'
import React from 'react'
const InGamePanel = () => {
  const { diceRes, setDiceRes } = useGlobalContext();

  const handleDice = () => {
    let randomNumber: number = Math.floor(Math.random() * 6) + 1;
    setDiceRes(randomNumber)
  }

  return (
    <section className='player-sec game-arena-sec'>
      <section className='flex flex-col gap-3 justify-center items-center mx-auto'>
        <div className='text-xl'>{diceRes}</div>
        <Button onClick={handleDice}>Roll the Dice</Button>
      </section>
    </section>
  )
}

export default InGamePanel
