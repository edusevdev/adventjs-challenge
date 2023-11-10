function distributeGifts(packOfGifts, reindeers) {
  const maxLoad = reindeers.join('').length * 2
  const weightGifts = packOfGifts.join('').length
  return Math.floor(maxLoad / weightGifts)
}

export { distributeGifts }