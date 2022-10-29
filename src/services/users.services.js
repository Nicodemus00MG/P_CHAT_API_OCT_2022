const {users} = require("../models")

class UserService {
    static async getAllUsers() {
        try {
            let results = await users.findAll();
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            let results = await users.findByPk(id);
            if (results){
                return results;
            }
            return {}
        } catch (error) {
            throw error;
        }
    }
    static async createUser(newUser) {
        try {
            const results = await users.create(newUser);
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async update(updateUser, id) {
        try {
            const result = await users.update(updateUser, {where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async deleteUser(id) {
        try {
            const result = await users.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserService;
