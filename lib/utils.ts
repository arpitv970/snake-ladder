import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PositionArrayType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const snakePositions: PositionArrayType[] = [
  {
    currentPosition: 22,
    gotoPosition: 11
  },
  {
    currentPosition: 98,
    gotoPosition: 27
  },
  {
    currentPosition: 89,
    gotoPosition: 5
  },
  {
    currentPosition: 45,
    gotoPosition: 17
  },
  {
    currentPosition: 67,
    gotoPosition: 39
  },
  {
    currentPosition: 59,
    gotoPosition: 23
  }
];
export const ladderPositions: PositionArrayType[] = [
  {
    currentPosition: 10,
    gotoPosition: 21
  },
  {
    currentPosition: 26,
    gotoPosition: 97
  },
  {
    currentPosition: 16,
    gotoPosition: 80
  },
  {
    currentPosition: 19,
    gotoPosition: 44
  },
  {
    currentPosition: 38,
    gotoPosition: 66
  },
  {
    currentPosition: 24,
    gotoPosition: 58
  }
];

export const dice = [1, 2, 3, 4, 5, 6];

export const playerCounts = [2, 3, 4];

// export const board = Array(100).fill(0);


const matrix = Array(10).fill(0).map((item, idx, arr) => {
  item = Array(10).fill(0).map((rItem, rIdx, rArr) => {
    rItem = 10 * idx + rIdx;
    return rItem
  })
  if (idx % 2 !== 0) item.reverse();
  return item
})

export const board = matrix.reverse();

// [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].reverse(),
// ].reverse()



/*
 [
 [...],
 [...],
 [...],
 [...],
 ...
 ]
 */
