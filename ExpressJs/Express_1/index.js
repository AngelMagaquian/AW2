import express from 'express'
import dotenv from 'dotenv'

//Traer nuestras variables de entorno
dotenv.config()

//Crear instancia de app
const app = express()

//Configurar puerto
const port = process.env.PORT || 3000

//Levantar el servidor
app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})


//Definicion de rutas
app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/codigos', (req, res) => {
    res.send('js!!')
})




