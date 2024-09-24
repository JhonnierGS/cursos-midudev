import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { useEffect } from 'react'

export const App = () => {
  const { fact, getRefreshFact } = useCatFact()
  const { catImage } = useCatImage({ fact })

  const handleClick = async () => {
    getRefreshFact()
  }

  useEffect(() => {
    getRefreshFact()
  }, [])

  console.log('fact:', fact)

  return (
    <main>
      <h1>App gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {catImage && <img src={catImage} alt='imagen de gato' width='300' height='300' />}
    </main>
  )
}
