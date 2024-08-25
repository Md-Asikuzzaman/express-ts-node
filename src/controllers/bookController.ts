import { Request, Response } from "express";

interface Book {
  name: string;
  pages: number;
  author: string;
}

// add a new book
export const addBook = (req: Request<{}, {}, Book, {}>, res: Response) => {
  const book = req.body;

  res.status(200).json(book);
};

export const getBooks = (req: Request, res: Response) => {
  res.status(200).json({ message: "all books" });
};

export const getBookById = (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;

  res.status(200).json({ message: `get book by => ${id}` });
};

export const updateBook = (
  req: Request<{ id: string }, {}, Book, {}>,
  res: Response
) => {
  const book = req.body;
  const id = req.params.id;

  res.status(200).json({ book, id });
};

export const deleteBook = (req: Request<{ id: string }>, res: Response) => {
  const id = req.params.id;

  res.status(200).json({ message: `delete book by => ${id}` });
};
