import { Router } from "express";
import connection from "../connection.js"

const router = Router();

router.put('/changePrice',(req, res)=>{

    const data = {
        id : parseInt(req.body.id),
        newPrice : parseFloat(req.body.newPrice),
        type: parseInt(req.body.type)
    }

    const column = data.type == 1 ? 'purchase_price' : 'selling_price'

    try {
        const query = `UPDATE items SET ${column} = ? WHERE id = ?`
        connection.query(query,[data.newPrice, data.id],(error, results)=>{
            if(error){
                console.log('Error al ejecutar la query', error)
                res.send(500).json('Error al ejecutar la consulta')
           }else{
                res.status(200).json(results)
           }
        })  
    } catch (error) {
        res.send(500).json('Error al ejecutar la consulta', error)
    }

})


export default router