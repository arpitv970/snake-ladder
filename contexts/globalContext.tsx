'use client'

import React, { useState } from "react"

interface GlobalContextProps {
  playersC: number,
  setPlayersC: (val: number) => void
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  playersC: 4,
  setPlayersC: () => { }
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [playerCount, setPlayerCount] = useState(0)

  return (
    <GlobalContext.Provider
      value={{
        playersC: playerCount,
        setPlayersC: setPlayerCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
