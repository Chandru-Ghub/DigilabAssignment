const userAuth = require('../Model/userAuth.Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwt_secret  = process.env.JWT_SECRET 
const signup = async(req,res)=>{

    const {username,email,password} = req.body
    try {
        // Check username already exist
        const checkUser = await userAuth.findOne({username})
        if(checkUser) return res.status(401).send('Username already existed!')

        // Check if email already exist
        const checkMail = await userAuth.findOne({email})
        if(checkMail) return res.status(401).send('email ID already existed!')

        // Register user
        // for security purpose we need to hash the password before store it in DB!
        const hashedpassword = await bcrypt.hash(password,10)
        const newRegister = new userAuth({...req.body,password:hashedpassword})
        await newRegister.save()
        res.status(201).json('User Registred sucessfully!')
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}

const signIn = async(req,res)=>{
    const{username,password} = req.body
    console.log(req.body)
    try{
        // Check username exists or not
        const user = await userAuth.findOne({username})
        if(!user) return res.status(401).send('invalid username!')

        // Verify password
        const verifyPass = await bcrypt.compare(password,user.password)
        if(!verifyPass) return res.status(401).send('Wrong credentials!')

        if(user && verifyPass){
            // Create acess token for the user
            // jwt has 3 parameters 1.payload(id/email) 2.JWT_SECRET 3.expiration time
            const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},jwt_secret)
            const {password,...data} = user._doc
            res.json({'data':data,'token':token})
        }
    }
    catch(error){
        res.status(401).send(error)
    }
}

module.exports = {signIn,signup}