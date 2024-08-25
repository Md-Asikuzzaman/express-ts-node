"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = process.env.DB_NAME || "mydb";
const username = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD || "my-secret-pw";
const host = process.env.DB_HOST || "localhost";
const port = parseInt(process.env.DB_PORT || "3306", 10);
const sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: "mysql",
    port: port,
    logging: false, // Set to true if you want to see SQL queries
});
// Test the connection
sequelize
    .sync({ alter: true }) // Update schema to match model
    .then(() => console.log("Database synchronized"))
    .catch((err) => console.error("Error synchronizing database:", err));
exports.default = sequelize;
