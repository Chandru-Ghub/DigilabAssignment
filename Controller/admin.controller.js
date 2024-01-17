const myPage = require('../Model/admin.Model')
const regUser = require('../Model/userAuth.Model')

// update page layout
const updatePage = async(req,res)=>{
    const id = '659e6b4c7c3488cac509264c'
    const {title,buttontxt,logoImg} = req.body
    try {
            const update = await myPage.findByIdAndUpdate(id,{
                $set:req.body
            },{new:true})
            res.status(201).send('Updated sucessfuly!')

    } catch (error) {
        res.status(400).send(error)
        
    }
}

const getPageData = async(req,res)=>{
    const id = '659e6b4c7c3488cac509264c'
    try {
        const data = await myPage.findById({_id:id})
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

// get all users

const getUser = async(req,res)=>{
    try{
        const users = await regUser.find()
        res.status(200).json(users)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

// delete user by ID

const deleteuser = async(req,res)=>{
    const id = req.params.id
    try {
        const del = await regUser.findByIdAndDelete({_id:id})
        res.status(200).send('User has been deleted!')
    } catch (error) {
        console.log(error)
    }
}

// get individual user data

const userData = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    try{
        const detail = await regUser.findById({_id:id})
        res.status(200).json(detail)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {updatePage,getUser,getPageData,deleteuser,userData}