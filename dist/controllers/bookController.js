"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.addBook = void 0;
// add a new book
const addBook = (req, res) => {
    const book = req.body;
    res.status(200).json(book);
};
exports.addBook = addBook;
const getBooks = (req, res) => {
    res.status(200).json({ message: "all books" });
};
exports.getBooks = getBooks;
const getBookById = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `get book by => ${id}` });
};
exports.getBookById = getBookById;
const updateBook = (req, res) => {
    const book = req.body;
    const id = req.params.id;
    res.status(200).json({ book, id });
};
exports.updateBook = updateBook;
const deleteBook = (req, res) => {
    const id = req.params.id;
    res.status(200).json({ message: `delete book by => ${id}` });
};
exports.deleteBook = deleteBook;
