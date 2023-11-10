import { countHours } from './reto-2'

test('happy path', () => {
  expect(countHours(2022, ['01/06', '04/01', '12/25'])).toEqual(4)
})

test('Test #04', () => {
  expect(
    countHours(1985, [
      '01/01',
      '01/06',
      '02/02',
      '02/17',
      '02/28',
      '06/03',
      '12/06',
      '12/25',
    ])
  ).toStrictEqual(10)
})

test('Test #05', () => {
  expect(countHours(2000, ['01/01'])).toStrictEqual(0)
})
