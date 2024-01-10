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

const addSubscribers = async (req,res)=>{

    const email  =req.body
    try {
        const newSubs = new subscribers(email)
        await newSubs.save()
        res.status(201).json(newSubs)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {addSubscribers,getSubscribers}