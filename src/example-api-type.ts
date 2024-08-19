import express, { Request, Response } from "express";
import { users } from "./MOCK_DATA";

const app = express();
const port = process.env.PORT || 8080;

interface UserParams {
  id: string;
}

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
}

interface ReqBodyType {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  job_title: string;
}

interface UserQueryParams {
  name?: string;
  age?: string;
  limit?: string;
}

app.get(
  "/api/users/:id",
  (
    req: Request<UserParams, UserType[], ReqBodyType, UserQueryParams>,
    res: Response<UserType[]>
  ) => {
    res.status(200).json(users);
  }
);

app.get(
  "/api/users/:id",
  (
    req: Request<UserParams, UserType, ReqBodyType, UserQueryParams>,
    res: Response<UserType>
  ) => {
    const id = parseInt(req.params.id);
    const findUserbyId = users.find((user) => user.id === id);

    res.status(200).json(findUserbyId);
  }
);

// Listener...
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
