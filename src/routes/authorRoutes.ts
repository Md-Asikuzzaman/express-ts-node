import { Router } from "express";
import {
  addAuthor,
  deleteAuthor,
  getAuthorById,
  getAuthors,
  updateAuthor,
} from "../controllers/authorController";

const router = Router();

router.post("/authors", addAuthor);
router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorById);
router.patch("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

export default router;
