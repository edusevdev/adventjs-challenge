import { wrapping } from './reto-1'

test('returns an Array', () => {
  expect(wrapping(['cat', 'game', 'socks'])).toBeInstanceOf(Array)
  expect(wrapping([])).toBeInstanceOf(Array)
})

test('happy path', () => {
  const result = wrapping(['cat', 'game', 'socks'])
  const expected = [
    '*****\n*cat*\n*****',
    '******\n*game*\n******',
    '*******\n*socks*\n*******',
  ]
  expect(result).toStrictEqual(expected)
})

test('wrapping(["midu", "achalogy"])', () => {
  const result = wrapping(['midu', 'achalogy'])
  const expected = [
    '******\n*midu*\n******',
    '**********\n*achalogy*\n**********',
  ]
  expect(result).toStrictEqual(expected)
})

test('Test #04 - wrapping(["a"])', () => {
  const result = wrapping(['a'])
  const expected = ['***\n*a*\n***']
  expect(result).toStrictEqual(expected)
})

test('Test #05 - Empty Array Should return an Empty Array', () => {
  const result = wrapping([])
  const expected = []
  expect(result).toStrictEqual(expected)
})
