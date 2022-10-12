import express from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/users.js'

const router = express.Router()

// route endpoint
router.get('/', getAllUsers)        
router.get('/:id', getUserById)     
router.post('/', createUser)        
router.patch('/:id', updateUser)    
router.delete('/:id', deleteUser)   

export default router