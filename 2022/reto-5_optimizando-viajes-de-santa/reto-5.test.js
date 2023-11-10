import { getMaxGifts } from "./reto-5"

test('happy path', () => {
  expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toStrictEqual(20)
})

test('zero', () => {
  expect(getMaxGifts([50], 15, 1)).toStrictEqual(0)
})

test('fallo edu', () => {
  expect(getMaxGifts([70, 50, 30], 80, 2)).toStrictEqual(80)
})