# Library api


## Instalação

1. Clone o repositório: `git clone https://github.com/gusttv/library-api.git`
2. Instale as dependências do projeto: `npm install`
3. Inicialize o banco de dados prisma: `npx prisma migrate "nome"`
3. Configure a url de conexão do banco de dados no .env
4. Inicalize o projeto: `yarn ou npm dev`

## Endpoints

- `GET /api/authors/`: Listagem de todos os autores.
- `GET /api/authors/id`: Retorna um autor.
- `POST /api/authors`: Criação de um autor.
- `PUT /api/authors/id`: Atualiza um autor.
- `DELETE /api/authors`: delete um autor(deleta seus livros em cascata).

- `GET /api/books/`: Listagem de todos os livros.
- `GET /api/authors/id`: Retorna um livro.
- `POST /api/authors`: Criação de um livro.
- `PUT /api/authors/id`: Atualiza um livro.
- `DELETE /api/authors`: delete um livro.