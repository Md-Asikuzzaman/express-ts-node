"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthor = exports.updateAuthor = exports.getAuthorById = exports.getAuthors = exports.addAuthor = void 0;
const Author_1 = __importDefault(require("./../model/Author"));
const sequelize_1 = require("sequelize");
// add a new author
const addAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = req.body;
    const newAuthor = yield Author_1.default.create({ email, name });
    res.status(201).json(newAuthor);
});
exports.addAuthor = addAuthor;
// get all authors
const getAuthors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield Author_1.default.findAll();
    res.status(200).json(authors);
});
exports.getAuthors = getAuthors;
// get author by id
const getAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const author = yield Author_1.default.findByPk(id);
    if (!author)
        return res.status(404).json({ message: "user not found." });
    res.status(200).json(author);
});
exports.getAuthorById = getAuthorById;
// update author by id
const updateAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const id = req.params.id;
    const author = yield Author_1.default.findByPk(id);
    if (!author)
        return res.status(404).json({ message: "user not found." });
    const existingAuthor = yield Author_1.default.findOne({
        where: {
            email,
            id: { [sequelize_1.Op.ne]: id }, // Ensure we don't match the current author
        },
    });
    if (existingAuthor) {
        return res.status(400).json({ message: "Email is already in use" });
    }
    // Update the author
    yield author.update({ name, email });
    res.json({
        message: "Author updated successfully",
        author,
    });
});
exports.updateAuthor = updateAuthor;
// delete author by id
const deleteAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const author = yield Author_1.default.findByPk(id);
    if (!author)
        return res.status(404).json({ message: "user not found." });
    // Delete the author
    yield author.destroy();
    res.json({ message: "Author deleted successfully" });
});
exports.deleteAuthor = deleteAuthor;
