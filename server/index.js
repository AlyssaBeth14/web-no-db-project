//import all packages
import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

//setup express instance
const app = express()

//setup middleware
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

//routes
import handlerFunctions from "./controller.js";
const {getBooks, addBook, deleteBook, editBook} = handlerFunctions

app.get('/books', getBooks)
app.post('/book', addBook)
app.delete('/book/:id', deleteBook)
app.put('/book/:id', editBook)

//open door to server
ViteExpress.listen(app, 6666, () => console.log(`Check out http://localhost:6666`))