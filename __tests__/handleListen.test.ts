import handleListen from '../src/handleListen'

describe.skip('handleListen', () => {
  it('should call log with the correct port', () => {
    const PORT = 3000
    const log = jest.fn()
    handleListen(log, PORT)
    expect(log.mock.calls).toHaveLength(1)
    expect(log.mock.calls[0][0]).toBe(`Server is listening on ${PORT}!`)
  })
})