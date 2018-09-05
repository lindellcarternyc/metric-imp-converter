import app from './app'
import handleListen from './handleListen' 

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>  handleListen(console.log, PORT))