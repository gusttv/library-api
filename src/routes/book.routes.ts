import express from 'express';
import bookController from '../controllers/book.controller';

export const bookRouter = express.Router();

// list all books
bookRouter.get('/', bookController.listBooks);

// get a book by id
bookRouter.get('/:id', bookController.getBook);

//create a book
bookRouter.post('/', bookController.createBook);

// update a book
bookRouter.put('/:id', bookController.updateBook);

// delete a book
bookRouter.delete('/:id', bookController.deleteBook);
