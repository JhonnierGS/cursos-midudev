import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [catImage, setCatImage] = useState('')

  // recupera la imagen cada vez que tenemos una cita
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 1).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.blob() // Cambiar a blob para manejar imágenes
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob)
        setCatImage(imageUrl)
      })
      .catch((error) => {
        console.error('Error fetching image:', error)
      })
  }, [fact])

  return {
    catImage
  }
}
