import { manufacture } from './reto-2'

test('Test #01 - return type', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toBeInstanceOf(Array)
})

test('Test #02', () => {
  expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toStrictEqual(['tren','oso',])
})

test('Test #03', () => {
  expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toStrictEqual([])
})

test('Test #04', () => {
  expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toStrictEqual([])
})

test('Test #05', () => {
  expect(manufacture([], 'letras')).toStrictEqual([])
})
