import { Sequelize } from "sequelize";

// Initialize Sequelize with your database credentials
const sequelize = new Sequelize("passport", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// Test the connection
sequelize
  .sync({ alter: true }) // Update schema to match model
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Error synchronizing database:", err));

export default sequelize;
