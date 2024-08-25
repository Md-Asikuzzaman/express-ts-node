import "dotenv/config"; // Load environment variables from .env
import express from "express";

import bookRouter from "./routes/bookRoutes";
import authorRouter from "./routes/authorRoutes";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", bookRouter);
app.use("/api", authorRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
