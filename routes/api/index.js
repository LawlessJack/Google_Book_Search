// Dependencies
const router = require("express").Router();
const booksRoutes = require("./books");

// Item routes
router.use("/books", booksRoutes);

//Exporting
module.exports = router;
