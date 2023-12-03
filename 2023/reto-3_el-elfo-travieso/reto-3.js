function findNaughtyStep(original, modified) {
  let [a, b] = original.length > modified.length
      ? [original, modified]
      : [modified, original]
  
  return a.split('').find((step, index) => step !== b.charAt(index)) ?? ''
}

export { findNaughtyStep }