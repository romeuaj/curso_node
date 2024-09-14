import { Router } from "express";
import {
  getUsers,
  creatUser,
  userDelete,
} from "./controllers/UserController.js";
const route = Router();

route.get("/users", getUsers);

route.post("/users", creatUser);
route.delete("/users/:id", userDelete);

export default route;
