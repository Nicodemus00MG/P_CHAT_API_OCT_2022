const express = require("express");
const userRoutes = require('./routes/users.routes');
const converstionsRoutes = require("./routes/conversations.routes")
const messagesRoutes = require("./routes/messages.routes");
const participantsRoutes = require("./routes/participants.routes");
const authRoutes = require("./routes/auth.routes");
const app = express();

app.use(express.json());
app.use('/api/v1/', userRoutes);
app.use('/api/v1/', converstionsRoutes);
app.use("/api/v1/", messagesRoutes);
app.use("/api/v1/", participantsRoutes);
app.use("/api/v1/", authRoutes);
module.exports = app;