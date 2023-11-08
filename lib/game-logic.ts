/*
 TODO:
 - start game
 - set players to 0
 - iterate through each player
  - roll the dice
  - move acc to dice
  - if stopped at snake / ladder move active player to end point of sanke / ladder
  - if reached to last tile, active player wins & provide it a rank
 - end the game by displaying all the players acc to rank
 */

import { ladderPositions, snakePositions } from "./utils";

export const playGame = (currentPosition: number, diceRoll: number) => {

  const newPosition = currentPosition + diceRoll;

  if (currentPosition === 0) {
    if (diceRoll === 1 || diceRoll === 6) {
      return diceRoll
    }
  }

  // check for snake
  const snake = snakePositions.find((snake) => {
    snake.currentPosition === newPosition
  });
  if (snake) {
    console.log(`Oops! You landed on a snake. Go back to position ${snake.gotoPosition}`);
    return snake.gotoPosition;
  }

  // check for ladder
  const ladder = ladderPositions.find((ladder) => {
    ladder.currentPosition === newPosition
  });
  if (ladder) {
    console.log(`Hooray! You found a ladder. Climb to position ${ladder.gotoPosition}`);
    return ladder.gotoPosition;
  }

  console.log(`You moved to position ${newPosition}`);
  return newPosition;

}
