import express from 'express'
import { readFile, writeFile  } from 'fs/promises' /*Codigo nuevo */

const app = express()

const port = 3000

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})


const file = await readFile('./data.json', 'utf-8') /*Codigo nuevo */
const userData = JSON.parse(file) /*Codigo nuevo */

const objetos = [
    {name: 'Auto', color: 'Rojo'},
    {name:'Arbol', color:'Verde'},
    {name: 'Rio', color:'Azul'},
    {name: 'Casa', color: 'Amarillo'}
]

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/colorDe/:objeto',(req,res)=>{
    const obj = req.params.objeto
    const result = objetos.find(e => e.name === obj)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(400).json(`${obj} no se encuentra`)
    }
    
})

app.post('/ColorDePost', (req,res)=>{
    console.log(req.headers)
    const obj = req.body.objeto
    const result = objetos.find(e => e.name === obj)

    if(result){
        res.status(200).json(result)
    }else{
        res.status(404).json(`${obj} no se encuentra`)
    }
})


app.get('/users/all', (req,res)=>{
    res.status(200).json(userData)
}) /*Codigo nuevo */

app.put('/users/salary/update/:userID', (req,res)=>{
    const user_id = req.params.userID
    const new_salary = req.body.salary

    try{
        const index = userData.findIndex(e => e.id == user_id)
        if(index != -1){
            userData[index].salary = new_salary
            writeFile('./data.json', JSON.stringify(userData,null,2));
            res.status(200).json('Salario modificado')
        }else{
            res.send(400).json('No se encontro al usuario')
        }
    }catch(error){
        res.send(500).json('Error al actualizar el salario')
    }
})


app.delete('/users/delete/:userID',(req,res)=>{
    const user_id = req.params.userID

    try{
        const index = userData.findIndex(e => e.id == user_id)

        if(index !== -1){
            userData.splice(index,1)
            writeFile('./data.json', JSON.stringify(userData,null,2));
            res.status(200).json('Usuario Eliminado')
        }else{
            res.send(400).json('No se encontro al usuario')
        }
    }catch(error){
        res.send(500).json('Error al eliminar usuario')
    }
})


