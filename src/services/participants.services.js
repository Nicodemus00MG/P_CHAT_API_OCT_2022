const {participants} = require("../models");

class ParticipantsServices {
    static async getAll() {
        try {
            const data = await participants.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            const data = await participants.findByPk(id);
            return data;
        } catch (error) {
            throw error;
        }
    }
    static async create(newParticipant) {
        try {
            const data = await participants.create(newParticipant);
            return data;
        } catch (error) {
            throw error;
        }
    }
    static async update(messageUpdated, id) {
        try {
            const data = await participants.update(messageUpdated, {where: {id}});
            return data;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id) {
        try {
            const data = await participants.destroy({where: {id}});
            return data;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=ParticipantsServices;