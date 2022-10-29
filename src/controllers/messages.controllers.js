const MessageService = require("../services/messages.services");

const getAllMessages = async (req, res, next)=>{
    try {
        const data = await MessageService.getAll();
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const getMessageById = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const data = await MessageService.getById(id);
        return res.json(data);
    } catch (error) {
        next(error);    
    }
}

const createMessage = async (req, res, next)=>{
    try {
        const {sender_id, conversation_id, message} = req.body;
        const newMessage = {
            sender_id,
            conversation_id,
            message
        }
        const data = await MessageService.create(newMessage);
        return res.status(201).json(data);
    } catch (error) {
        next(error);
    }
}

const updateMessage = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const {sender_id, conversation_id, message} = req.body;
        const messageUpdated = {
            sender_id,
            conversation_id,
            message
        }
        const data = await MessageService.update(messageUpdated, id);
        return res.json(data);
    } catch (error) {
        next(error);
    }
}

const deleteMessage = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const data = await MessageService.delete(id);
        if (data){
            return res.json({message: 'el mensaje fue eliminado'});
        }
        return res.json({message: 'el mensaje no se pudo eliminar'});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
}