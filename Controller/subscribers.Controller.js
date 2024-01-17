const subscribers = require('../Model/subscribers.Model')

// Get all subscribers!

const getSubscribers = async (req,res)=>{
        try {
                const subs = await subscribers.find()
                res.status(200).json(subs)
        } catch (error) {
            res.status(400).send(error)
            console.log(error)
        }
}

// Add new subscribers!

const addSubscribers = async (req,res,next)=>{

    const email  =req.body
    try {

        const check = await subscribers.findOne(email)
        if(check) return res.status(200).send('You already subscribed!!')
        const newSubs = new subscribers(email)
        await newSubs.save()
        res.status(201).json(newSubs)
        next()
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

// Delete subscribers!

const deletesubscribers = async(req,res)=>{
    const id = req.params.id
    try {
        const del = await subscribers.findByIdAndDelete({_id:id})
        res.status(200).send('Subscription has been deleted!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {addSubscribers,getSubscribers,deletesubscribers}