const UserService = require("../services/users.services");

const getAllUsers = async (req, res, next)=>{
    try {
        const data = await UserService.getAllUsers();
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = await UserService.getById(id);
        return res.json(data);
    } catch (error) {
        next(error);    
    }
}

const createUser = async (req, res, next)=>{
    try {
        const {firstname, lastname, email, password, profile_image, phone} = req.body;
        const newUser = {
            firstname,
            lastname,
            email,
            password,
            profile_image,
            phone
        }
        const data = await UserService.createUser(newUser);
        return res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const {firstname, lastname, email, password, profile_image, phone} = req.body;
        const userUpdated = {
            firstname,
            lastname,
            email,
            password,
            profile_image,
            phone
        }
        const data = await UserService.update(userUpdated, id);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const data = await UserService.deleteUser(id);
        if (data){
            return res.json({message: 'el ususario fue eliminado'});
        }
        return res.json({message: 'el ususario no se pudo eliminar'});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}