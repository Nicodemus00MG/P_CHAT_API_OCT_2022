const {conversations, users, participants, messages} = require("../models")

class ConversationService {
    static async getAll() {
        try {
            let results = await conversations.findAll();
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async getById(id) {
        try {
            let results = await conversations.findByPk(id);
            if (results){
                return results;
            }
            return {}
        } catch (error) {
            throw error;
        }
    }
    static async create(newConversation) {
        try {
            const results = await conversations.create(newConversation);
            return results;
        } catch (error) {
            throw error;
        }
    }
    static async update(updateConversation, id) {
        try {
            const result = await conversations.update(updateConversation, {where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async delete(id) {
        try {
            const result = await conversations.destroy({where:{id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async conversationUser(id) {
        try {
            const result = await conversations.findOne({
                where: {id},
                include: [
                    {
                        model: users, 
                        as:"created_by_user"
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async conversationParticipants(id) {
        try {
            const result = await conversations.findOne({
                where: {id},
                attributes:{
                    exclude: ["created_at", "updated_at"]
                },
                include: [
                    {
                        model: participants,
                        as: "participants",
                        attributes: ["id"],
                        include: [{
                            model: users,
                            as:"user",
                            attributes: {exclude: ["password", "created_at", "updated_at"]}
                        }]
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async conversationMessages(id) {
        try {
            const result = await conversations.findOne({
                where: {id},
                include: [
                    {
                        model: messages,
                        as: "messages"
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = ConversationService;