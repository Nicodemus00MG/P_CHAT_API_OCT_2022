const Routes = require("express");
const {getAllParticipants,
    getParticipantById,
    createParticipant,
    updateParticipant,
    deleteParticipant
} = require("../controllers/participants.controllers");
const router = Routes();

router.get("/participants", getAllParticipants);
router.get("/participants/:id", getParticipantById);
router.post("/participants", createParticipant);
router.put("/participants/:id", updateParticipant);
router.delete("/participants/:id", deleteParticipant);

module.exports=router;