import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Test/07-deses-arr', () => {
  test('07-deses-arr return an array ', () => {
    const [letter, numbers] = retornaArreglo()

    //Validacion según un tipo de dato
    expect(typeof letter).toBe('string');
    expect(typeof numbers).toBe('number');

  })

})
