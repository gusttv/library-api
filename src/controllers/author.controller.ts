import type { Request, Response } from 'express';
import AuthorService from '../services/author.service';
import authorService from '../services/author.service';

class AuthorController {
  public async listAuthors(req: Request, res: Response): Promise<void> {
    try {
      const authors = await AuthorService.listAuthors();
      res.status(201).json(authors);
    } catch(error) {
      res.status(500).json(error.message);
    }
  }

  public async getAuthor(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    try {
      const author = await AuthorService.getAuthor(id);
      author ? res.status(201).json(author) : res.status(404).json('Author doesn\'t exist');
    } catch(error) {
      res.status(500).json(error.message);
    }
  }

  public async createAuthor(req: Request, res: Response): Promise<void> {
    try {

      const author = req.body;
      const newAuthor = await AuthorService.createAuthor(author);

      res.status(201).json(newAuthor);
    } catch(error) {
      res.status(500).json(error.message); 
      console.log(error);
    } 
  }

  public async updateAuthor(req: Request, res: Response) {
    try {
      const author = req.body;
      const id = Number(req.params.id);
      const updatedAuthor = await authorService.updateAuthor(author, id);
      res.status(401).json(updatedAuthor);
    } catch(error) {
      res.status(500).json(error.message);
    }
  }
}

export default new AuthorController();