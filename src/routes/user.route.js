const express = require('express')
const user = require('../models/User.js')
const router = express.Router()
const { readUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller.js')

router.get('/', readUser)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', deleteUser)