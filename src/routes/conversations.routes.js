const Router = require("express");
const {getAllConversations, 
        getConversationById, 
        createConversation, 
        updateConversation, 
        deleteConversation,
        createdByUser,
        conversationParticipants,
        conversationMessages
} = require("../controllers/conversations.controllers");
const router = Router();

router.get("/conversations", getAllConversations);
router.get("/conversations/:id", getConversationById);
router.post("/conversations", createConversation);
router.put("/conversations/:id", updateConversation);
router.delete("/conversations/:id", deleteConversation);
//Relaciones
//Una conversación fue creada por un usuario
router.get("/conversations/:id/users", createdByUser);
//Obtiene participantes de una conversación
router.get("/conversations/:id/participants", conversationParticipants);
//Obtener mansajes de una conversación
router.get("/conversations/:id/messages", conversationMessages);

module.exports=router;