import express from 'express';
import type { Request, Response } from 'express';
import { authorRouter } from './routes';

export class App {
  private app: express.Application;

  constructor () {
    this.app = express();
    this.middlewares();
    this.routes();
    
  }

  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Running...');
    });

    this.app.use('/api', authorRouter );
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    
  }

  public listen(): void {
    this.app.listen(3000, () => {
      console.log('Rodando na porta 3000');
    });
  }
}