import { Flag } from 'lucide-react'
import React from 'react'

interface PropsType {
  pId: number
}

const PlayerBlock = ({ pId }: PropsType) => {
  return (
    <span className={`player-id-${pId}`}>
      <Flag />
    </span>
  )
}

export default PlayerBlock
