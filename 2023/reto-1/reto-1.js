function findFirstRepeated(gifts) {
  const savedGifts = []

  for (const gift of gifts) {
    if (savedGifts.includes(gift)) {
      return gift
    }
    savedGifts.push(gift)
  }

  return -1
}

export { findFirstRepeated }