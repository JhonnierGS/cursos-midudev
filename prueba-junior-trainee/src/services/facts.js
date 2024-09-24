const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await response.json()
  const { fact } = data
  if (!fact) {
    throw new Error('No fact was found') // Si no hay cita, lanzamos un error
  }
  return fact
}
