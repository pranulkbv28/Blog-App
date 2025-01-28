# Backend

- This directory is the `backend` of the blog app.
- The **backend** is being created with `ExpressJs` for the **server**, `NodeJs` for the **runtime** and `MongoDB` for the **database**.
- We are using [`bcryptjs`](https://www.npmjs.com/package/bcryptjs) to hash the password.
- We are using [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) to manage the tokens for the **authentication**.
- We are using [`cookieParser`](https://www.npmjs.com/package/cookie-parser) to manage the cookies.
- We are using [`dotenv`](https://www.npmjs.com/package/dotenv) to manage the environment variables.
- We are using [`cors`](https://www.npmjs.com/package/cors) to manage the cross-origin requests.

## APIs

### Recording Response and Error

- We are using a pre-defined object, [`ApiResponse`](./utils/ApiResponse.js) to record the response and [`ApiError`](./utils/ApiError.js) to record the error.

### Routes

- to access the routes, all of them have a prefix of `/api/v1/`

#### User Routes

- **API** - `/api/v1/user`
  - **POST** - `/signup` - to sign up a new user
    - **Body**: `username`, `password`
    - **Response**: On successful signup, the response will be

    ```json
    {
      "data": {
        "accessToken": "",
        "loggedInUser": {}
      },
      "message": "",
      "statusCode": 200,
      "success": true,
    }
    ```

  - **POST** - `/login` - to login a user
    - **Body**: `username`, `password`
    - **Response**: On successful login, the response will be

    ```json
    {
      "data": {
        "accessToken": "",
        "loggedInUser": {}
      },
      "message": "",
      "statusCode": 200,
      "success": true,
    }
    ```

  - **POST** - `/logout` - to logout the user
    - **Response**: On successful logout, the response will be

    ```json
    {
      "data": {}, // this will be an empty object
      "message": "",
      "statusCode": 200,
      "success": true,
    }
    ```
