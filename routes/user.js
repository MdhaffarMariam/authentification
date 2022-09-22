const express= require ('express');
const { register, login, auth } = require('../controllers/user.controller');
const { registrerules,validator } = require('../middlewares/validator');
const verifyAuth = require('../middlewares/verifyauth');
const router = express.Router()

router.post('/register',registrerules(), validator, register)
router.post('/login',login)
router.get('/auth',verifyAuth,auth)

module.exports = router;