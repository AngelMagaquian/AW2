import express from "express";
import userRoutes from './routes/user.routes.js'
import saleRoutes from './routes/sales.routes.js'
import itemRoutes from './routes/items.routes.js'
const app = express();

app.use(express.json());

const port = 3001

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use('/user', userRoutes)
app.use('/sale', saleRoutes)
app.use('/item', itemRoutes)

