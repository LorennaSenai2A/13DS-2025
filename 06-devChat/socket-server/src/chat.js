const { Server } = require("socket.io");

let io;

const initChat = (httpServer) => {
    io = new Server(httpServer);

    io.on("connection", (socket) => {
        console.log("A user connected: " + socket.id);

        socket.on("chat message", (msg) => {
            console.log("Message received: " + msg);
            io.emit("chat message", msg);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected: " + socket.id);
        });
    });
};

const sendMessage = (msg) => {
    if (io) {
        io.emit("chat message", msg);
    }
};

module.exports = {
    initChat,
    sendMessage,
};