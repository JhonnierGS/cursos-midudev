import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setfact] = useState('')

  const getRefreshFact = async () => {
    getRandomFact().then(newFact => setfact(newFact)) // tambien se puede .then(setfact) es lo mismo
  }
  // efecto recupera la cita al cargar pagina
  useEffect(() => getRefreshFact, [])

  return {
    fact,
    getRefreshFact
  }
}
