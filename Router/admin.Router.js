const { updatePage, getUser, getPageData, deleteuser, userData } = require('../Controller/admin.controller')
const { verifyTokenAndAdmin } = require('../JWT_Verification/jwt.auth')
const handleMail = require('../Service/node.Mail')

const router = require('express').Router()

// route to get  landing page data
router.get('/getpage',getPageData)

// route to update landing page
router.post('/updatepage',verifyTokenAndAdmin,updatePage)

// route to get all registerd users
router.get('/getuser',verifyTokenAndAdmin,getUser)

// route to get individual user detail!
router.get('/getuserdetail/:id',verifyTokenAndAdmin,userData)

// route to delete registerd users
router.delete('/deleteuser/:id',verifyTokenAndAdmin,deleteuser)

// route to send mail for subscribers
router.post('/sendmail',verifyTokenAndAdmin,handleMail)
module.exports = router