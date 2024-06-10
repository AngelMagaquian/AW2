import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'
import { verifyToken } from "../utils/middleware.js";

const router = Router()
const fileContact = await readFile('./data/contacts.json', 'utf-8')
const contactData = JSON.parse(fileContact)

router.get('/all',(req,res)=>{
    res.status(200).json(contactData)
})

router.get('/byUser/:id',(req,res)=>{
    const id = req.params.id
    try{
        const data = contactData.filter(e => e.idUser == id)
        if(data && data.length > 0){
            console.log(data)
            res.status(200).json(data)
        }else{
            res.status(204)
        }
    }catch(error){
        console.log(error)
        res.status(400)
    }
})

router.post('/newContact', async (req, res) => {
    const { name, lastName, email, phone, socialMedia, idUser, token } = req.body
  
    if (!await verifyToken(token)) {
      return res.status(400).json({ status: false })
    }
  
    try {
      contactData.push({ name, lastName, email, phone, socialMedia, idUser })
      await writeFile('./data/contacts.json', JSON.stringify(contactData, null, 2))
      return res.status(200).json({ status: true })
  
    } catch (error) {
      console.log(error)
      return res.status(500).json({ status: false, message: 'Internal Server Error' })
    }
})

export default router