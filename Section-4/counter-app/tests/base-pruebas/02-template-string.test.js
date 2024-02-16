import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Test/02-template-string', () => {
  test('getSaludo return saludo', () => {
    const name = 'Brayan'
    const saludo = getSaludo(name)

    expect(saludo).toBe(saludo)
  })

})
