const express = require('express')
const router = express.Router()
const MenuItem = require('../models/Menu.js')

router.post("/",async(req,resp)=>{
    try{
        // const data = req.body
        // const newPerson = new Person(data)
        // newPerson.save()
        const Menu= await MenuItem.create(req.body)
        resp.status(200).send("Success")
       }
       catch(err){
        console.log("ERROR",err)
        resp.send("ERROR")
       }

})

router.get('/',async(req,resp)=>{
    try {
        const data= await MenuItem.find()
        console.log(data)
        resp.status(200).json(data)
    } catch (error) {
        console.log("ERROR")
        resp.status(500).send("ERROR")
    }
})

router.get('/:taste',async(req,resp)=>{
    try {
        const taste= req.params.taste
        if(taste == 'Spicy' || taste == 'Sour' || taste =='Sweet'){
            const data = await MenuItem.find({taster:taste})
            resp.status(200).json(data)
        }
        else{
            resp.status(404).send("ERROR")
        }
    }
    catch (error) {
        console.log("ERROR")
        resp.status(500).send("ERROR")
    }
})

// export router
module.exports = router