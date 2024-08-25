import { Request, Response } from "express";
import Author from "./../model/Author";
import { Op } from "sequelize";

interface AuthorType {
  name: string;
  email: string;
}

// add a new author
export const addAuthor = async (
  req: Request<{}, {}, AuthorType, {}>,
  res: Response
) => {
  const { email, name } = req.body;

  const newAuthor = await Author.create({ email, name });

  res.status(201).json(newAuthor);
};

// get all authors
export const getAuthors = async (req: Request, res: Response) => {
  const authors = await Author.findAll();

  res.status(200).json(authors);
};

// get author by id
export const getAuthorById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = req.params.id;
  const author = await Author.findByPk(id);

  if (!author) return res.status(404).json({ message: "user not found." });
  res.status(200).json(author);
};

// update author by id
export const updateAuthor = async (
  req: Request<{ id: string }, {}, AuthorType, {}>,
  res: Response
) => {
  const { name, email } = req.body;
  const id = req.params.id;

  const author = await Author.findByPk(id);
  if (!author) return res.status(404).json({ message: "user not found." });

  const existingAuthor = await Author.findOne({
    where: {
      email,
      id: { [Op.ne]: id }, // Ensure we don't match the current author
    },
  });

  if (existingAuthor) {
    return res.status(400).json({ message: "Email is already in use" });
  }

  // Update the author
  await author.update({ name, email });

  res.json({
    message: "Author updated successfully",
    author,
  });
};

// delete author by id
export const deleteAuthor = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = req.params.id;

  const author = await Author.findByPk(id);
  if (!author) return res.status(404).json({ message: "user not found." });

  // Delete the author
  await author.destroy();

  res.json({ message: "Author deleted successfully" });
};
