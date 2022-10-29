const Router = require("express");
const {getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage} = require("../controllers/messages.controllers");

const router = Router();

router.get("/messages", getAllMessages);
router.get("/messages/:id", getMessageById);
router.post("/messages", createMessage);
router.put("/messages/:id", updateMessage);
router.delete("/messages/:id", deleteMessage);

module.exports=router;