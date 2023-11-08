'use client'

import { playerType } from "@/lib/types"
import React, { useState } from "react"

interface GlobalContextProps {
  gameStatus: boolean,
  setGameStatus: (val: boolean) => void,

  diceRes: number,
  setDiceRes: (val: number) => void,

  players: playerType[],
  setPlayers: (val: playerType[]) => void
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  gameStatus: false,
  setGameStatus: () => { },

  diceRes: 0,
  setDiceRes: () => { },

  players: [
    {
      id: 1,
      activePosition: 0,
      acitve: true,
    },
    {
      id: 2,
      activePosition: 0,
      acitve: false,
    }
  ],
  setPlayers: () => { }
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameStatus, setGameStatus] = useState(false)
  const [diceRes, setDiceRes] = useState<number>(0);
  const [players, setPlayers] = useState<playerType[]>([
    {
      id: 1,
      activePosition: 0,
      acitve: true,
    },
    {
      id: 2,
      activePosition: 0,
      acitve: false,
    }
  ])
  return (
    <GlobalContext.Provider
      value={{
        gameStatus,
        setGameStatus,
        diceRes,
        setDiceRes,
        players,
        setPlayers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
