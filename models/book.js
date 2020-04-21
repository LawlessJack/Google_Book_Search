// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const bookSchema = new Schema({
	title: { type: String, required: true },
	authors: { type: String, required: true },
	description: { type: String},
	image: { type: String, trim: true },
	link: { type: String, trim: true },
	date: { type: Date, default: Date.now }
});

//Setting schema to variable
const Book = mongoose.model("Book", bookSchema);

//Exporting
module.exports = Book;
