const { signup, signIn } = require('../Controller/auth.controller')

const router = require('express').Router()


// signUp or Register router
router.post('/signup',signup)


// signIn  or Login router
router.post('/signin',signIn)

module.exports = router