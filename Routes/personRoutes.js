const express = require('express')
const router= express.Router()
const Person = require('../models/Person_model')

router.post("/",async(req,resp)=>{
    try{
     // const data = req.body
     // const newPerson = new Person(data)
     // newPerson.save()
     const newPerson= await Person.create(req.body)
     resp.status(200).send("Success")
    }
    catch(err){
     console.log("ERROR",err)
     resp.status(500).send("ERROR")
    }
 })

 
router.get("/",async(req,resp)=>{
    try {
        const data = await Person.find()
        console.log(data)
        resp.status(200).json(data)
        
    } catch (error) {
        console.log("ERROR")
        resp.status(500).send("ERROR")
    }
})


router.get('/:worktype',async(req,resp)=>{
    try {
        const workType= req.params.worktype
        if(workType == 'chef' || workType == 'manager' || workType =='waiter'){
            const data = await Person.find({work:workType})
            resp.status(200).json(data)
        }
        else{
            resp.status(404).send("Not Found")
        }
    } catch (error) {
        resp.status(500).json({error:"Internal Server Error"})
    }
})

router.put('/:id',async(req,resp)=>{
    try {
        const id = req.params.id;
        const newData = req.body
        const response = await Person.findByIdAndUpdate(id,newData,{
            new:true,   // Return the updated document
            runValidators:true  // Run Mongoose validation

        })
        resp.status(200).send("Update successfully")

        if(!response){
            return resp.status(404).send("Person not found")
        }

    } catch (error) {
        resp.status(500).json({error:"Internal Server Error"})
    }
})

router.delete('/:id',async(req,resp)=>{
    try {
        const id = req.params.id;
        const response = await Person.findByIdAndRemove(id);
        resp.status(200).send("deleted")
        if(!response){
            return resp.status(404).send("Person not found")
        }

    } catch (error) {
        resp.status(500).json({error:"Internal Server Error"})
    }
})

// export router
module.exports =router