const ConversationService = require("../services/conversations.services");

const getAllConversations = async (req, res, next)=>{
    try {
        const data = await ConversationService.getAll();
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const getConversationById = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = await ConversationService.getById(id);
        return res.json(data);
    } catch (error) {
        next(error);    
    }
}

const createConversation = async (req, res, next)=>{
    try {
        const {title, image_url, type, created_by} = req.body;
        const newConversation = {
            title,
            image_url,
            type, 
            created_by
        }
        const data = await ConversationService.create(newConversation);
        return res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

const updateConversation = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const {title, image_url, type, created_by} = req.body;
        const convUpdated = {
            title,
            image_url,
            type, 
            created_by
        }
        const data = await ConversationService.update(convUpdated, id);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const deleteConversation = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const data = await ConversationService.delete(id);
        if (data){
            return res.json({message: 'la conversacion fue eliminada'});
        }
        return res.json({message: 'la conversacion no se pudo eliminar'});
    } catch (error) {
        next(error);
    }
}

const createdByUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await ConversationService.conversationUser(id);
        return res.json(data);
    } catch (error) {
        next(error)
    }
}

const conversationParticipants = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = await ConversationService.conversationParticipants(id);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const conversationMessages = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = await ConversationService.conversationMessages(id);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation,
    createdByUser,
    conversationParticipants,
    conversationMessages
}