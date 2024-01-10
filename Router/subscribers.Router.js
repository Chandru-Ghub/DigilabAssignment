const { getSubscribers, addSubscribers } = require('../Controller/subscribers.Controller')
const { verifyTokenAndAdmin } = require('../JWT_Verification/jwt.auth')

const router = require('express').Router()

// Get all subscribers!
router.get('/subscribers',verifyTokenAndAdmin,getSubscribers)

// Add new subscriber!
router.post('/newsubscriber',addSubscribers)

module.exports = router