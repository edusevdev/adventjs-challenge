import { fitsInOneBox } from './reto-4'

test('return type', () => {
  expect(
    typeof fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ])
  ).toStrictEqual('boolean')
})

test('Test #02', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ])
  ).toStrictEqual(false)
})

test('Test #03', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ])
  ).toStrictEqual(true)
})

test('Test #04', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ])
  ).toStrictEqual(false)
})

test('Test #05', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ])
  ).toStrictEqual(false)
})

test('Test #06', () => {
  expect(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ])
  ).toStrictEqual(true)
})