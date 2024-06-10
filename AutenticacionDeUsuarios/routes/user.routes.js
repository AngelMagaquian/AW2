import { Router } from "express";
import { readFile, writeFile } from 'fs/promises' 
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { decodeToken } from "../utils/middleware.js";
const router = Router()
const fileUsers = await readFile('./data/users.json', 'utf-8')
const userData = JSON.parse(fileUsers)


const SECRET = "_AQPsssHV56kFO7ImQL9DPEj5UzCYuLGB8bSAmedv74gLPueV9abm51Ca18rIGJC"


router.post('/login', (req, res)=>{
    const userName = req.body.userName
    const pass = req.body.pass

    const result = userData.find(e => e.username === userName)

    if (!result) {
        return res.status(404).send({status:false});
    }

    const controlPass = bcrypt.compareSync(pass, result.pass)
    console.log(controlPass)

    if (!controlPass) {
        return res.status(401).send({status:false})
    }

    const token = jwt.sign({ ...result},SECRET , { expiresIn: 86400 })

    res.status(200).json(token)
})

router.post('/create',(req,res)=>{
    const {name,lastname,username,pass} = req.body
    

    try{
        const hashedPass = bcrypt.hashSync(pass, 8);

        console.log(hashedPass)

        const id =  userData.length > 0 ? userData[userData.length-1].id + 1 : 1

        userData.push({name,lastname, username, id, pass:hashedPass})

        writeFile('./data/users.json', JSON.stringify(userData,null,2))

        res.status(200).json({status:true})

    }catch(error){
        console.log(error)
        res.status(400).json({status:false})
    }
})

router.post('/decodeToken',async (req,res)=>{
    const token = req.body.token

    const result = await decodeToken(token)
    console.log(result)
    res.status(200).json(result)
})

export default router