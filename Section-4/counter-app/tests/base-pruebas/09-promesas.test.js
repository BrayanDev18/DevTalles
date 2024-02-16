import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Test/09-promesas', () => {

  /*
  TODO La funcion done le indica a Jest que ya terminó.
  */
  test('getHeroeByIdAsync return an heroe', (done) => {
    const id = 1
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        done()
      })
  })

  test('getHeroeByIdAsync obtain an error', (done) => {
    const id = 100
    getHeroeByIdAsync(id)
      .catch(error => {

        expect(error).toBe(`Not found id ${id}`);
        done()
      })
  })

})
