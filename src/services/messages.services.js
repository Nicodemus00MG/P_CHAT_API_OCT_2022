const {messages} = require("../models")

class MessagesService {
    static async getAll() {
        try {
            let results = await messages.findAll();
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            let results = await messages.findByPk(id);
            if (results){
                return results;
            }
            return {}
        } catch (error) {
            throw error;
        }
    }
    static async create(newMessages) {
        try {
            const results = await messages.create(newMessages);
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async update(updateMessage, id) {
        try {
            const result = await messages.update(updateMessage, {where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id) {
        try {
            const result = await messages.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = MessagesService;
