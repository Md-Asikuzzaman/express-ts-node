"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // Load environment variables from .env
const express_1 = __importDefault(require("express"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", bookRoutes_1.default);
app.use("/api", authorRoutes_1.default);
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
