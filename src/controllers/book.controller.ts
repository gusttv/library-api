import type { Request, Response } from 'express';
import bookService from '../services/book.service';


class BookController {

  async listBooks(req: Request, res: Response): Promise<void> {
    try {
      const books = await bookService.listBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getBook(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      const book = await bookService.getBook(id);
      book ? res.status(200).json(book) : res.status(404).json('Book doesn\'t exist');
    } catch(error) {
      res.status(500).json(error.message);
    }
  }

  async createBook(req: Request, res: Response): Promise<void> {
    const book = req.body;
    try {
      const newBook = await bookService.createBook(book);
      res.status(201).json(newBook);
    } catch(error) {
      res.status(500).json(error.message);
    }
  }

  async updateBook(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const book = req.body;
    try {
      const updatedBook = await bookService.updateBook(book, id);
      res.status(201).json(updatedBook);
    } catch(error) {
      res.status(500).json(error.message);
    }
  }

  async deleteBook(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    try {
      await bookService.deleteBook(id);
      res.status(201).json(`Book with id ${id} was deleted`);
    } catch(error) {
      res.status(500).json(error.message);
      console.log(error);
    }
  }
}

export default new BookController();