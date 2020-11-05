import { ContourFinder } from '../src'
import * as data from './data'

describe('ContourFinder', () => {
  test(' index to point converter', () => {
    const cf = new ContourFinder(data.dot)

    expect(cf.indexToPoint(0)).toMatchObject({
      x: 0,
      y: 0,
    })

    expect(cf.indexToPoint(4)).toMatchObject({
      x: 1,
      y: 1,
    })

    expect(cf.indexToPoint(8)).toMatchObject({
      x: 2,
      y: 2,
    })
  })

  test('dot', () => {
    const found = new ContourFinder(data.dot).extract()

    console.log(found)

    expect(found.length).toBe(1)
    expect(found[0]).toEqual([4])
  })

  test('square', () => {
    const found = new ContourFinder(data.square).extract()

    expect(found.length).toBe(1)
    expect(found[0]).toEqual([5, 6, 10, 9])
  })

  test('squares', () => {
    expect.assertions(3)

    const found = new ContourFinder(data.squares).extract()

    expect(found.length).toBe(2)
    expect(found[0]).toEqual([9, 10, 18, 17])
    expect(found[1]).toEqual([21, 22, 30, 29])
  })

  test('squares_edge', () => {
    const found = new ContourFinder(data.squares_edge).extract()

    expect(found.length).toBe(2)
    expect(found[0]).toEqual([0, 1, 6, 5])
    expect(found[1]).toEqual([8, 9, 14, 13])
  })

  test('connected', () => {
    const found = new ContourFinder(data.connected).extract()

    expect(found.length).toBe(1)
  })

  test('lots', () => {
    const found = new ContourFinder(data.stuff).extract()

    expect(found.length).toBe(5)
  })

  test('filled', () => {
    const found = new ContourFinder(data.large_square).extract()

    expect(found.length).toBe(1)
  })
})
