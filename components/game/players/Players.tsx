'use client'
import { useGlobalContext } from '@/contexts'
import SelectPlayers from './SelectPlayers'
import InGamePanel from './InGamePanel';

const Players = () => {
  const { gameStatus } = useGlobalContext();
  return (
    gameStatus
      ? <InGamePanel />
      : <SelectPlayers />
  )
}

export default Players
