import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Test/08-imp-exp', () => {

  test('getHeroeById return heroe to id', () => {
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroesByOwner return an array', () => {
    const ownerDC = 'DC'
    const ownerMarvel = 'Marvel'
    const ownerArray = getHeroesByOwner(ownerDC)

    expect(ownerArray.length).toBe(3); //Evalua si el length es igual a 3
    expect(ownerArray).toEqual(ownerArray)
  })

})
