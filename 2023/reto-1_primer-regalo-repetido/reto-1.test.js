import { findFirstRepeated } from './reto-1'

test('Test #01 - return type', () => {
  expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBeInstanceOf(Number)
})

test('Test #02', () => {
  expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toStrictEqual(3)
})

test('Test #03', () => {
  expect(findFirstRepeated([2, 2])).toStrictEqual(2)
})

test('Test #04', () => {
  expect(findFirstRepeated([2, 4, 3, 5, 1])).toStrictEqual(-1)
})

test('Test #05', () => {
  expect(findFirstRepeated([1])).toStrictEqual(-1)
})

test('Test #06', () => {
  expect(findFirstRepeated([])).toStrictEqual(-1)
})

test('Test #07', () => {
  expect(findFirstRepeated([10, 20, 30])).toStrictEqual(-1)
})

test('Test #08', () => {
  expect(findFirstRepeated([10, 20, 30])).toStrictEqual(2)
})

test('Test #09', () => {
  expect(findFirstRepeated([12, 20, 30, 11, 20, 12])).toStrictEqual(20)
})
