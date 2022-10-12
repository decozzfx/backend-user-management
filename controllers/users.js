import Users from "../models/usersModel.js"

export const getAllUsers = async (req, res) => {
    try {                                           // try catch -> untuk menghandle error
        const user = await Users.findAll()
        res.json(user)        
    } catch (error) {
        res.json({ msg : error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await Users.findAll({
            where : {
                id : req.params.id
            }
        })

        res.json(user[0])
    } catch (error) {
        res.json({ msg : error})
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body)
        res.json({
            "user" : user,
            'message' : 'Product created'
        })
    } catch (error) {
        res.json({ msg : error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        await Users.update(req.body , {
            where : {
                id : req.params.id
            }
        })
        res.json({
            'message' : 'product updated'
        })
    } catch (error) {
        res.json({ message : error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await Users.destroy({
            where : {
                id : req.params.id
            }
        })
        res.json({'message' : 'Product deleted'})
    } catch (error) {
        res.json({ message : error.message})
    }
}