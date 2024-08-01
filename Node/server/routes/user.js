const express = require("express")
const router = express.Router();
const User = require("../models/user") ;



router.post("/users", async(req, res) => {
console.log(req.body)
const user = new User(req.body)

try{

    await user.save()
    res.status(201).send(user)



}catch(error){

      res.status(400).send(error)

}

});

router.get("/users", async(req,res)=>{

    try{

        const users = await User.find({})
        res.status(200).send(users);

    }catch(error){

        res.status(400).send(error);
    }



});   


router.get("/users/:id", async(req,res)=>{

    const _id = req.params.id;

    try{

        const user = await User.findById(_id);
        if(!user){

            res.status(404).send();
        }
       
       
        res.status(200).send(user);

    }catch(error){

        res.status(400).send(error);
    }



});   
 

router.patch("/users/:id", async(req,res)=>{
    

    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updatedUser){

            res.status(404).send();
        }
       
       
        res.status(200).send(updatedUser);
        
    } catch (error) {

        res.status(400).send(error);
        
    }



});


router.delete("/users/:id", async(req,res)=>{
    

    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser){

            res.status(404).send();
        }
       
       
        res.status(200).send(deletedUser);
        
    } catch (error) {

        res.status(400).send(error);
        
    }

});

module.exports = router;


