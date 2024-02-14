import express from 'express'
import {registerController} from '../Controllers/authController.js'
import {loginController} from '../Controllers/authController.js'

//router object

const router=express.Router();

//routing 

//register routes 
router.post('/register',registerController)

//login route

router.post('/login',loginController)

export default router