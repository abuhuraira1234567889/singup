
const express=require('express')
const router =express.Router()
const signUpTempleteCopy=require('../modals/Signupmodal')
router.post("/singup",(request,response)=>{
const signedUpUser =new signUpTempleteCopy({
    fullName:request.body.fullName,
    username:request.body.username,
    email:request.body.email,
    password:request.body.password
    

    })
    signedUpUser.save()
    .then(data=>{
        response.status(200).json({message: "successfully registered"})
    })
    .catch(error=>{
        response.json(error)
    })
})

module.exports=router