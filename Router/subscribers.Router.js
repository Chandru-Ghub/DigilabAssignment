const { getSubscribers, addSubscribers, deletesubscribers } = require('../Controller/subscribers.Controller')
const { verifyTokenAndAdmin } = require('../JWT_Verification/jwt.auth')
const handleMail = require('../Service/node.Mail')

const router = require('express').Router()

// Get all subscribers!
router.get('/subscribers',verifyTokenAndAdmin,getSubscribers)

// Add new subscriber!
router.post('/newsubscriber',addSubscribers,handleMail)

// Delete  subscriber!
router.delete('/deletesubscribers/:id',verifyTokenAndAdmin,deletesubscribers)

module.exports = router