import { db } from '../database/prisma';
// import { author } from '../types/author';
import { bookRead } from '../types/bookRead';
import { bookWrite } from '../types/bookWrite';

class BookService {

  // testar com a promise retornando any e removendo o objeto select
  async listBooks(): Promise<bookRead[]> {
    return await db.book.findMany({
      select: {
        id: true,
        title: true,
        datePublished: true,
        isFiction: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  async getBook(id: number): Promise<bookRead> {
    return await db.book.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        title: true,
        datePublished: true,
        isFiction: true,
        author: true
      }
    });
  }

  async createBook(book: bookWrite): Promise<bookRead> {
    const { title, authorId, datePublished, isFiction } = book;
    const parsedDate: Date = new Date(datePublished); 
    return db.book.create({
      data: {
        title,
        authorId,
        isFiction,
        datePublished: parsedDate,
      },
      select: {
        id: true,
        title: true,
        isFiction: true,
        datePublished: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  async updateBook(book: bookWrite, id: number): Promise<bookRead> {
    const { title, datePublished, isFiction, authorId } = book;
    return db.book.update({
      where: {
        id,
      },
      data: {
        title,
        datePublished,
        isFiction,
        authorId
      },
      select: {
        id: true,
        title: true,
        isFiction: true,
        datePublished: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          }
        }
      }

    });
  }

  async deleteBook(id: number): Promise<void> {
    db.book.delete({
      where: {
        id
      }
    });
  }
}

export default new BookService();
