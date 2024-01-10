const { updatePage, getUser, getPageData } = require('../Controller/admin.controller')
const { verifyTokenAndAdmin } = require('../JWT_Verification/jwt.auth')

const router = require('express').Router()

// route to get update landing page data
router.get('/getpage',getPageData)

// route to get update landing page
router.post('/updatepage',verifyTokenAndAdmin,updatePage)

// route to get all registerd users
router.get('/getuser',verifyTokenAndAdmin,getUser)
module.exports = router