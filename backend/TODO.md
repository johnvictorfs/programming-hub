# TODO:

- Create `Comment` Model
    ```c#
    Id: long
    AuthorId: long
    AuthorName: string
    PostId: long
    Content: string
    ```

- Create `User` Model
    ```c#
    Id: long
    Username: string
    Password: string
    // PasswordHash?
    ```

- Create `Comment` CRUD routes

- Create `api/posts/{id}/comments` route
    - Lists all comments created for post with Id `id`
