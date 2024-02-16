/*
TODO Los test se ejecutan de forma sincrónica
*/

describe('Test <DemoComponent/>', () => {
  test('Esta prueba es nueva', () => {
    //Inicializacion
    const message1 = 'Hello Word'
    const message2 = message1.trim()

    expect(message1).toBe(message2)
  })
})

