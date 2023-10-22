import { Router } from "express";
import connection from "../connection.js"

import { generate_id } from "../utils/sales.js";

const router = Router();

router.post('/add',(req, res)=>{

    const item = parseInt(req.body.item)
    const total = parseFloat(req.body.total)
    const seller = parseInt(req.body.seller)

    const id = generate_id(item, seller)

    try {
        const query = `INSERT INTO sales (id, item, total, seller) VALUES (?,?,?,?)`

        connection.query(query, [id,item,total, seller], (error, results) =>{
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