import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes.js' 
import contactRouter from './routes/contact.routes.js' 


const app = express()
const port = 3001

app.use(express.json())


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

app.use(cors({
    origin:'http://127.0.0.1:5500'
}))

/* app.use(express.static('/client')) */

app.use('/user', userRouter)
app.use('/contact', contactRouter)
