import { Router } from "express";
import {
  addBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controllers/bookController";

const router = Router();

router.post("/books", addBook);
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.patch("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
