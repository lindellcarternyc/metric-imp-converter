const handleListen = (logger: (...args: any[]) => void, PORT: number | string) => {
  logger(`Server is listening on ${PORT}!`)
}

export default handleListen