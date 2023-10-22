import { Router } from "express";
import connection from "../connection.js"
const router = Router();

router.get('/byId/:id', (req,res)=>{

    const id = req.params.id

    const query = `SELECT * FROM users WHERE id = ?`

    connection.query(query,[id],(error, results)=>{
        if(error){
            console.log('Error al ejecutar la query', error)
            res.send(500).json('Error al ejecutar consulta')
        }else{
            res.status(200).json(results)
        }
    })
})

export default router