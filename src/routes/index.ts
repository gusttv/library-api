import express from 'express';
import authorController from '../controllers/author.controller';

export const authorRouter = express.Router();

// list all authors
authorRouter.get('/', authorController.listAuthors);
// list an author by id
authorRouter.get('/:id', authorController.getAuthor);

// create a new author
// firstName, lastName
authorRouter.post('/', authorController.createAuthor);

// update an author
// firstName, lastName
authorRouter.put('/:id', authorController.updateAuthor);



