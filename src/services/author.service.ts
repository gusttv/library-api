import { db } from '../database/prisma';
import { author } from '../types/author';

class AuthorService {
  public async listAuthors(): Promise<author[]> {
    return await db.author.findMany();
  }

  public async getAuthor(id: number): Promise<author> {
    return await db.author.findUnique({
      where: {
        id
      }
    });
  }
  
  public async createAuthor(author: Omit<author, 'id'>): Promise<author> {
    const { firstName, lastName } = author;
    return await db.author.create({
      data: {
        firstName,
        lastName
      }
    });
  }

  public async updateAuthor(author:  Omit<author, 'id'>, id: number): Promise<author> {
    const { firstName, lastName } = author;
    return await db.author.update({
      where: {
        id
      },
      data: {
        firstName,
        lastName
      }
    });
  }
}

export default new AuthorService;