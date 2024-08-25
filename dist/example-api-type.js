"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MOCK_DATA_1 = require("./MOCK_DATA");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get("/api/users/:id", (req, res) => {
    res.status(200).json(MOCK_DATA_1.users);
});
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findUserbyId = MOCK_DATA_1.users.find((user) => user.id === id);
    res.status(200).json(findUserbyId);
});
// Listener...
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
