const ParticipantsServices = require("../services/participants.services");

const getAllParticipants = async (req, res, next)=>{
    try {
        const participants = await ParticipantsServices.getAll();
        res.json(participants);
    } catch (error) {
        next(error);
    }
}

const getParticipantById = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const participant = await ParticipantsServices.getById(id);
        res.json(participant);
    } catch (error) {
        next(error);
    }
}

const createParticipant = async (req, res, next)=>{
    try {
        const {conversation_id, user_id} = req.body;
        const newParticipant = {conversation_id, user_id}
        const participant = await ParticipantsServices.create(newParticipant);
        res.json(participant);
    } catch (error) {
        next(error);
    }
}

const updateParticipant = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const {conversation_id, user_id} = req.body;
        const participantUpdated = {conversation_id, user_id};
        const participant = await ParticipantsServices.update(participantUpdated, id);
        res.json(participant);
    } catch (error) {
        next(error);
    }
}

const deleteParticipant = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const participant = await ParticipantsServices.delete(id);
        res.json(participant);
    } catch (error) {
        next(error);
    }
}

module.exports= {
    getAllParticipants,
    getParticipantById,
    createParticipant,
    updateParticipant,
    deleteParticipant
}