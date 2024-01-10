const myPage = require('../Model/admin.Model')
const regUser = require('../Model/userAuth.Model')

// update page layout
const updatePage = async(req,res)=>{
    const id = '659e6b4c7c3488cac509264c'
    const {title,buttontxt,logoImg} = req.body
    console.log(req.body)
    try {
            const update = await myPage.findByIdAndUpdate(id,{
                $set:req.body
            },{new:true})
            res.status(201).send('Updated sucessfuly!')

    } catch (error) {
        res.status(400).send(error)
        
    }
}

const getPageData = async(rSeeq,res)=>{
    const id = '659e6b4c7c3488cac509264c'
    try {
        const data = await myPage.findById({_id:id})
        res.status(200).json(data)
        console.log(data)
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

module.exports = {updatePage,getUser,getPageData}