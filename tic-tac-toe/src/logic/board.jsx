import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToChech) => {
  // revisamos combinaciones ganadoras
  for (const combination of WINNER_COMBOS) {
    const [a, b, c] = combination
    if(
      boardToChech[a] && // 0 -> X u O
      boardToChech[a] === boardToChech[b] && // 0 === 1 -> X = X u O = O
      boardToChech[a] === boardToChech[c]
    ) {
      return boardToChech[a]
    }
  }
  // si no hay ganador
  return null
}