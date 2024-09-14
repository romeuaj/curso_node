import { Router } from "express";
import { getUsers, getUser, addUser, deleteUser, updateUser, getMsg } from "./controllers/userController.js";

const route = Router()
route.get ('/', getMsg)
route.get('/users', getUsers)
route.get('/user/:id', getUser)
route.post('/users', addUser)
route.delete('/users', deleteUser)
route.put('/users', updateUser)

export default route