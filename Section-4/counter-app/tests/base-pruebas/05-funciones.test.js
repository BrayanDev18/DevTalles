import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Test/05-funciones', () => {
  test('getUser return an Object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()

    expect(testUser).toEqual(user)
  })

  test('getUsuarioActivo return an object', () => {

    const name = 'Brayan'
    const user = getUsuarioActivo(name)

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name
    })
  })

})
