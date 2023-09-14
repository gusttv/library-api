import { db } from '../database/prisma';
import { author } from '../types/author';

class AuthorService {
  public async listAuthors(): Promise<author[]> {
    return await db.author.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true
      }
    });
  }

  public async getAuthor(id: number): Promise<author> {
    return await db.author.findUnique({
      where: {
        id
      }, 
      select: {
        id: true,
        firstName: true,
        lastName: true
      }
    });
  }
  
  public async createAuthor(author: Omit<author, 'id'>): Promise<author> {
    const { firstName, lastName } = author;
    return await db.author.create({
      data: {
        firstName,
        lastName
      }, 
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
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
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });
  }

  public async deleteAuthor(id: number): Promise<void> {
    await db.author.delete({
      where: {
        id
      }
    });
  }
}

export default new AuthorService;