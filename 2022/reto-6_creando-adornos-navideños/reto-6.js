function createCube(size) {
  let result = ''

  // Top side
  for (let i = 1; i <= size; i++) {
    result += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n'
  }

  // Bottom side
  for (let i = 0; i < size; i++) {
    result += ' '.repeat(i) + '\\/'.repeat(size - i) + '_/'.repeat(size) + '\n'
  }

  // It's removed the last \n
  return result.slice(0, -1)
}

export { createCube }
