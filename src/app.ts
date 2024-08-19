import express, { Request, Response } from "express";
import { users } from "./MOCK_DATA";

const app = express();
const port = process.env.PORT || 8080;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// get all users
app.get(
  "/api/users",
  (req: Request<{}, UserType[], {}, {}>, res: Response<UserType[]>) => {
    res.status(200).json(users);
  }
);

// get a user by ID
app.get(
  "/api/users/:id",
  (req: Request<UserParams, UserType, {}, {}>, res: Response<UserType>) => {
    const id = parseInt(req.params.id);
    const findUserbyId = users.find((user) => user.id === id);

    res.status(200).json(findUserbyId);
  }
);

// create a new user
app.post(
  "/api/users",
  (req: Request<{}, {}, UserType, {}>, res: Response<{ message: string }>) => {
    const body = req.body;

    res.status(200).json({ message: "user created." });
  }
);

// update a user by ID
app.patch(
  "/api/users/:id",
  (
    req: Request<UserParams, {}, UserType, {}>,
    res: Response<{ message: string }>
  ) => {
    const id = req.params.id;
    const body = req.body;

    res.status(200).json({ message: "user updated." });
  }
);

// delete a user by ID
app.patch(
  "/api/users/:id",
  (
    req: Request<UserParams, {}, {}, {}>,
    res: Response<{ message: string }>
  ) => {
    const id = req.params.id;

    res.status(200).json({ message: "user deleted." });
  }
);

// Listener...
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
