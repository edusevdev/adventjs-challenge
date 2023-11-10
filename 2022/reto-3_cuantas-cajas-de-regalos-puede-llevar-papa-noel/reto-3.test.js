import { distributeGifts } from './reto-3' 

test('happy path', () => {
  const packOfGifts = ['book', 'doll', 'ball']
  const reindeers = ['dasher', 'dancer']

  expect(distributeGifts(packOfGifts, reindeers)).toEqual(2)
})

test('return type', () => {
  expect(
    typeof distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
  ).toStrictEqual('number')
})

test('Test #03', () => {
  expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toStrictEqual(1)
})

test('Test #04', () => {
  expect(distributeGifts(['videogames', 'console'], ['midu'])).toStrictEqual(0)
})

test('Test #05', () => {
  expect(
    distributeGifts(
      ['game', 'videoconsole', 'computer'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    )
  ).toStrictEqual(5)
})

test('Test #06', () => {
  expect(
    distributeGifts(
      ['music'],
      [
        'midudev',
        'pheralb',
        'codingwithdani',
        'carlosble',
        'blasco',
        'facundocapua',
        'madeval',
        'memxd',
      ]
    )
  ).toStrictEqual(26)
})