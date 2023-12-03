import { findNaughtyStep } from "./reto-3"

test('Test #01 - return type', () => {
  expect(typeof findNaughtyStep('abcd', 'abcde')).toBe('string')
})

test('Test #02', () => {
  expect(findNaughtyStep('abcd', 'abcde')).toStrictEqual('e')
})

test('Test #03', () => {
  expect(findNaughtyStep('xxxx', 'xxoxx')).toStrictEqual('o')
})

test('Test #04', () => {
  expect(findNaughtyStep('stepfor', 'stepor')).toStrictEqual('f')
})

test('Test #05', () => {
  expect(findNaughtyStep('iiiii', 'iiiii')).toStrictEqual('')
})
