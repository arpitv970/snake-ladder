export interface PositionArrayType {
  currentPosition: number,
  gotoPosition: number,
}

export interface boardTile {
  id: number,
  type: 'neutral' | 'snake' | 'ladder',
}

export interface playerType {
  id: number,
  activePosition: number,
}
