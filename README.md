# Programming-hub

Blog simples feito para a matéria de Tecnologias de Internet

---

#### Tecnologias utilizadas

- Frontend
  - [Twitter Bootstrap 4](https://getbootstrap.com/)
  - [Angular 7.2.X](https://angular.io/)
- Backend
  - [ASP.NET Core 2.2](https://docs.microsoft.com/en-us/aspnet/core/)

---

#### Instalação

- Clonar projeto

  ```bash
  git clone https://github.com/johnvictorfs/programming-hub
  cd programming-hub/
  ```

- Frontend

  ```bash
  # Instalar dependências de Frontend
  cd frontend/
  yarn
  ```

  ```bash
  # Rodar em hot-reload em modo de desenvolvimento
  yarn start
  ```

- Backend

  - Requisito: [ASP.NET Core 2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2)

  ```bash
  # Rodar API da backend em modo de hot-reload
  cd backend/
  dotnet watch run
  ```

  - Frontend estará disponível na url http://localhost:4200
  - API estará disponível na url http://localhost:5000

#### Funções

- **Post**

  - Listar Posts - `GET /api/posts`
  - Criar Post - `POST /api/posts`
  - Ver detalhes de Post - `GET/api/posts/:postId`
  - Editar Post - `PUT /api/posts/:postId`
  - Excluir Post - `DELETE /api/posts/:postId`

- **Comentário**
  - Criar Comentário em resposta a um Post - `POST /api/comments/`
  - Criar Comentário em resposta a outro Comentário - `POST /api/comments/`
  - Ver Comentários em resposta a um Post específico - `GET api/comments/post/:postId/comments`
  - Ver Comentários em resposta a um Comment específico - `GET api/comments/childs/:commentId`

#### Imagens

| Criando Post          | Editando Post                 |
| --------------------- | ----------------------------- |
| ![new_post][new_post] | ![editing_post][editing_post] |

| HomePage              | Detalhes de um Post         |
| --------------------- | --------------------------- |
| ![homepage][homepage] | ![postdetails][postdetails] |

| Comentários em um Post |
| ---------------------- |
| ![comments][comments]  |

[editing_post]: https://user-images.githubusercontent.com/37747572/58135753-0b20f980-7c02-11e9-9193-39c81c4093a3.png
[new_post]: https://user-images.githubusercontent.com/37747572/58135712-dca31e80-7c01-11e9-9609-3410d131c28f.png
[homepage]: https://user-images.githubusercontent.com/37747572/58135914-926e6d00-7c02-11e9-9273-ce238e5afc94.png
[postdetails]: https://user-images.githubusercontent.com/37747572/58135962-bcc02a80-7c02-11e9-8e8a-87bd55a0463a.png
[comments]: https://user-images.githubusercontent.com/37747572/58136038-ff820280-7c02-11e9-9b9a-1b78d2010c02.png
