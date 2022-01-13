import express from 'express'
import {getUsers, addUser, editUser, delUser, getUserById} from '../controllers/controllers.js'
const route= express.Router()

route.get('/', getUsers)
route.post('/add', addUser)
route.get('/:id', getUserById)
route.put('/:id', editUser)
route.delete ('/:id', delUser)

export default route