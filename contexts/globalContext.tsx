'use client'

import React, { useState } from "react"

interface GlobalContextProps {
  gameStatus: boolean,
  setGameStatus: (val: boolean) => void,

  diceRes: number,
  setDiceRes: (val: number) => void,
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  gameStatus: false,
  setGameStatus: () => { },

  diceRes: 0,
  setDiceRes: () => { }
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameStatus, setGameStatus] = useState(false)
  const [diceRes, setDiceRes] = useState<number>(0);
  return (
    <GlobalContext.Provider
      value={{
        gameStatus,
        setGameStatus,
        diceRes,
        setDiceRes
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
