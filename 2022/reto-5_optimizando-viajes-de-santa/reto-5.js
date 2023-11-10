function getMaxGifts(giftsCities, maxGifts, maxCities) {

  // Inicializamos una matriz para almacenar las combinaciones
  const combinations = [[]]

  // Generamos las combinaciones de ciudades y regalos
  for (const city of giftsCities) {
    const newCombinations = []
    for (const combination of combinations) {
      const newCombination = [...combination, city]
      if (newCombination.length <= maxCities) {
        newCombinations.push(newCombination)
      }
    }
    combinations.push(...newCombinations)
  }

  // Filtramos las combinaciones válidas y calculamos la suma de regalos
  const validCombinations = combinations.filter(
    (combination) => combination.length <= maxCities
  )

  // Calculamos el sumatorio de cada combinación
  const giftSums = validCombinations.map((combination) =>
    combination.reduce((a, b) => a + b, 0)
  )

  // Filtramos las combinaciones que cumplen con la restricción de maxGifts
  const validGiftSums = giftSums.filter((sum) => sum <= maxGifts)

  // Devolvemos el resultado que tiene la suma máxima de regalos
  return Math.max(...validGiftSums)
}


function getMaxGiftsOPT(giftsCities, maxGifts, maxCities) {
  /*
  1 - Calculamos todas las posibles combinaciones
  2 - Nos quedamos solo con las que tengan una longitud <= que maxCities
  3 - Calculamos la suma de regalos de cada combinación
  4 - Nos quedamos solo con las que sumen <= que maxGifts
  5 - Devolvemos el resultado que más regalos sume
  */
  return Math.max(
    ...giftsCities
      .reduce((x, y) => x.concat(x.map((x) => [y].concat(x))), [[]])
      .filter((x) => x.length <= maxCities)
      .map((x) => x.reduce((a, b) => a + b, 0))
      .filter((x) => x <= maxGifts)
  )
}

export { getMaxGifts }
